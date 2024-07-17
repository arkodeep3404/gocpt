const express = require("express");
const router = express.Router();
const zod = require("zod");
const mammoth = require("mammoth");
const multer = require("multer");
const { authMiddleware } = require("../middleware/middleware");
const { ChatOpenAI } = require("@langchain/openai");
const { ConversationChain } = require("langchain/chains");
let {
  one_word_prompt,
  instruction1,
  instruction3,
  instruction5,
} = require("./prompt");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const llm = new ChatOpenAI({
  model: "gpt-3.5-turbo-16k",
});

const agent = new ConversationChain({
  llm: llm,
  verbose: true,
});

router.post(
  "/upload",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      const buffer = req.file.buffer;
      const { value: doc_content } = await mammoth.extractRawText({
        buffer: buffer,
      });

      instruction1 += "\n\n";
      instruction1 += doc_content;
      instruction1 += "\n\n";
      instruction1 += "Study it and just provide your answer";
      const response1 = await agent.predict({ input: instruction1 });

      let instruction2 = one_word_prompt;
      instruction2 += "\n\n";
      instruction2 += response1;
      const response2 = await agent.predict({ input: instruction2 }); //main

      instruction3 += "\n\n";
      instruction3 += doc_content;
      instruction3 += "\n\n";
      instruction3 += "Study it and just provide your answer";
      const response3 = await agent.predict({ input: instruction3 });

      let instruction4 = one_word_prompt;
      instruction4 += "\n\n";
      instruction4 += response3;
      const response4 = await agent.predict({ input: instruction4 }); //main

      instruction5 += "\n\n";
      instruction5 += doc_content;
      instruction5 += "\n\n";
      instruction5 += "Study it and just provide your answer";
      const response5 = await agent.predict({ input: instruction5 });

      let instruction6 = one_word_prompt;
      instruction6 += "\n\n";
      instruction6 += response5;
      const response6 = await agent.predict({ input: instruction6 }); //main

      const inputs = [response2, response4, response6];
      const sorted_inputs = inputs.sort(
        (a, b) =>
          ["MINIMAL", "LOW", "MODERATE", "HIGH"].indexOf(a) -
          ["MINIMAL", "LOW", "MODERATE", "HIGH"].indexOf(b)
      );
      const mdm_value = sorted_inputs[1];

      res.status(200).json({
        response2: response2,
        response4: response4,
        response6: response6,
        mdm_value: mdm_value,
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  }
);

router.post("/code1", authMiddleware, async (req, res) => {
  const { mdm, input } = req.body;
  let hcpcs_code;

  if (input === "NEW" && mdm === "MINIMAL") {
    hcpcs_code = "99202";
  } else if (input === "NEW" && mdm === "LOW") {
    hcpcs_code = "99203";
  } else if (input === "NEW" && mdm === "MODERATE") {
    hcpcs_code = "99204";
  } else if (input === "NEW" && mdm === "HIGH") {
    hcpcs_code = "99205";
  } else if (input === "ESTABLISHED" && mdm === "MINIMAL") {
    hcpcs_code = "99212";
  } else if (input === "ESTABLISHED" && mdm === "LOW") {
    hcpcs_code = "99213";
  } else if (input === "ESTABLISHED" && mdm === "MODERATE") {
    hcpcs_code = "99214";
  } else if (input === "ESTABLISHED" && mdm === "HIGH") {
    hcpcs_code = "99215";
  } else {
    return res.status(400).json({
      message: "incorrect inputs",
    });
  }

  res.status(200).json({
    hcpcs_code: hcpcs_code,
  });
});

router.post("/code2", authMiddleware, async (req, res) => {
  const { input } = req.body;
  let hcpcs_code;

  if (input === "20 min") {
    hcpcs_code = "99242";
  } else if (input === "30 min") {
    hcpcs_code = "99243";
  } else if (input === "40 min") {
    hcpcs_code = "99244";
  } else if (input === "55 min") {
    hcpcs_code = "99245";
  } else {
    return res.status(400).json({
      message: "incorrect inputs",
    });
  }

  res.status(200).json({
    hcpcs_code: hcpcs_code,
  });
});

module.exports = router;
