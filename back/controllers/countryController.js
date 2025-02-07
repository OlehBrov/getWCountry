const { default: axios } = require("axios");

const { COUNTRY_BASE_URL } = process.env;

const getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(`${COUNTRY_BASE_URL}/AvailableCountries`);

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getCountryInfo = async (req, res) => {
  const { code } = req.params;
  try {
    const response = await axios.get(`${COUNTRY_BASE_URL}/CountryInfo/${code}`);

    return res.status(200).json({
      data: response.data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllCountries, getCountryInfo };
