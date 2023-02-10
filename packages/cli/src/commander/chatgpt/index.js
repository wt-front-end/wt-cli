const { Configuration, OpenAIApi } = require("openai");

let buffer = Buffer.from('c2stNnhuOHlQTmhzMXJhOENxOHdTR2RUM0JsYmtGSmpsMEhEM3lnWExBcVFReDZwWlBa', 'base64')
const configuration = new Configuration({
  apiKey: buffer.toString(),
});
const openai = new OpenAIApi(configuration);

module.exports = async function (req, res) {
  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured, please follow instructions in README.md",
      }
    });
    return;
  }
  const keyword = req.body?.keyword || '';
  if (keyword.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "请输入有效的内容",
      }
    });
    return;
  }

  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: req.body?.keyword,
      max_tokens: 500,
      temperature: 0.6,
    });
    let text = completion.data.choices[0].text;
    // let html = converter.makeHtml(text);
    res.status(200).json({ result: text });
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}
