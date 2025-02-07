const { default: axios } = require("axios");

const { COUNTRY_DETAILS_BASE_URL } = process.env;

const getPopulation = async (req, res) => {
  const { country } = req.params;
  console.log('country', country)
  try {
    const response = await axios.post(
      `${COUNTRY_DETAILS_BASE_URL}/countries/population`,
      {
        country: country,
      }
    );

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    // console.error(error);
    res.status(400).json({ error: error.message });
  }
};

const getFlag = async (req, res) => {
      const { country } = req.params;
  try {
    const response = await axios.post(
      `${COUNTRY_DETAILS_BASE_URL}/countries/flag/images`,
      {
        iso2: country,
      }
    );

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    console.error(error)
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPopulation, getFlag };
