import joi from "joi";

const scraperSchema = joi.object({
  url: joi.string().uri().required(),
  filter: joi.string(),
  scraperParam: joi.string().required(),
});

export default scraperSchema;
