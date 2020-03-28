const { htmlTemplate, footer } = require('./helpers');
exports.countryNameMap = {
  China: 'CN',
  UK: 'GB',
  Martinique: 'MQ',
  Liechtenstein: 'LI',
  'Réunion': 'RE',
  Ukraine: 'UA',
  Honduras: 'HN',
  Afghanistan: 'AF',
  Bangladesh: 'BD',
  Macao: 'MO',
  Bolivia: 'BO',
  Cuba: 'CU',
  Netherlands: 'NL',
  Jamaica: 'JM',
  'French Guiana': 'GF',
  DRC: 'CD',
  Cameroon: 'CM',
  Maldives: 'MV',
  Montenegro: 'ME',
  Paraguay: 'PY',
  Nigeria: 'NG',
  Guam: 'GU',
  'French Polynesia': 'PF',
  Austria: 'AT',
  Ghana: 'GH',
  Rwanda: 'RW',
  Monaco: 'MC',
  Gibraltar: 'GI',
  Guatemala: 'GT',
  'Ivory Coast': 'CI',
  Ethiopia: 'ET',
  Togo: 'TG',
  'Trinidad and Tobago': 'TT',
  Kenya: 'KE',
  Belgium: 'BE',
  Mauritius: 'MU',
  'Equatorial Guinea': 'GQ',
  Kyrgyzstan: 'KG',
  Mongolia: 'MN',
  'Puerto Rico': 'PR',
  Seychelles: 'SC',
  Tanzania: 'TZ',
  Guyana: 'GY',
  Aruba: 'AW',
  Barbados: 'BB',
  Norway: 'NO',
  Mayotte: 'YT',
  'Cayman Islands': 'KY',
  'Curaçao': 'CW',
  Bahamas: 'BS',
  Congo: 'CD',
  Gabon: 'GA',
  Namibia: 'NA',
  'St. Barth': 'BL',
  'Saint Martin': 'MF',
  'U.S. Virgin Islands': 'VI',
  Sweden: 'SE',
  Sudan: 'SD',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  CAR: 'CF',
  Greenland: 'GL',
  Haiti: 'HT',
  Liberia: 'LR',
  Mauritania: 'MR',
  'New Caledonia': 'NC',
  Denmark: 'DK',
  'Saint Lucia': 'LC',
  Zambia: 'ZM',
  Nepal: 'NP',
  Angola: 'AO',
  'Antigua and Barbuda': 'AG',
  'Cabo Verde': 'CV',
  Chad: 'TD',
  Djibouti: 'DJ',
  'El Salvador': 'SV',
  Fiji: 'FJ',
  Japan: 'JP',
  Gambia: 'GM',
  Guinea: 'GN',
  'Vatican City': 'VA',
  'Isle of Man': 'IM',
  Montserrat: 'MS',
  Nicaragua: 'NI',
  Niger: 'NE',
  'St. Vincent Grenadines': 'VC',
  'Sint Maarten': 'SX',
  Somalia: 'SO',
  Malaysia: 'MY',
  Suriname: 'SR',
  Eswatini: 'SZ',
  Australia: 'AU',
  Italy: 'IT',
  Canada: 'CA',
  Portugal: 'PT',
  Czechia: 'CZ',
  Israel: 'IL',
  Brazil: 'BR',
  Luxembourg: 'LU',
  Ireland: 'IE',
  Greece: 'GR',
  Qatar: 'QA',
  Pakistan: 'PK',
  Iran: 'IR',
  Finland: 'FI',
  Poland: 'PL',
  Turkey: 'TR',
  Singapore: 'SG',
  Chile: 'CL',
  Iceland: 'IS',
  Thailand: 'TH',
  Slovenia: 'SI',
  Indonesia: 'ID',
  Bahrain: 'BH',
  Spain: 'ES',
  Romania: 'RO',
  'Saudi Arabia': 'SA',
  Estonia: 'EE',
  Ecuador: 'EC',
  Egypt: 'EG',
  Peru: 'PE',
  Philippines: 'PH',
  'Hong Kong': 'HK',
  India: 'IN',
  Russia: 'RU',
  Germany: 'DE',
  Iraq: 'IQ',
  Mexico: 'MX',
  Lebanon: 'LB',
  'South Africa': 'ZA',
  Kuwait: 'KW',
  'San Marino': 'SM',
  UAE: 'AE',
  Panama: 'PA',
  Armenia: 'AM',
  Taiwan: 'TW',
  USA: 'US',
  Argentina: 'AR',
  Colombia: 'CO',
  Slovakia: 'SK',
  Serbia: 'RS',
  Croatia: 'HR',
  Bulgaria: 'BG',
  Uruguay: 'UY',
  Algeria: 'DZ',
  'Costa Rica': 'CR',
  Latvia: 'LV',
  France: 'FR',
  Hungary: 'HU',
  Vietnam: 'VN',
  'Faeroe Islands': 'FO',
  Andorra: 'AD',
  Brunei: 'BN',
  Belarus: 'BY',
  Jordan: 'JO',
  Cyprus: 'CY',
  'Sri Lanka': 'LK',
  Albania: 'AL',
  'S. Korea': 'KR',
  'Bosnia and Herzegovina': 'BA',
  Morocco: 'MA',
  Malta: 'MT',
  'North Macedonia': 'MK',
  Moldova: 'MD',
  Kazakhstan: 'KZ',
  Lithuania: 'LT',
  Oman: 'OM',
  Cambodia: 'KH',
  Palestine: 'PS',
  Switzerland: 'CH',
  Guadeloupe: 'GP',
  Azerbaijan: 'AZ',
  Georgia: 'GE',
  Venezuela: 'VE',
  Tunisia: 'TN',
  'New Zealand': 'NZ',
  Senegal: 'SN',
  'Dominican Republic': 'DO',
  'Burkina Faso': 'BF',
  Uzbekistan: 'UZ',
  'Madagascar': 'MG',
  'Uganda': 'UG',
  'Zimbabwe': 'ZW',
  'Dominica': 'DM',
  'Laos': 'LA',
  'Myanmar': 'MM',
  'Belize': 'BZ',
  'Eritrea': 'ER',
  'Grenada': 'GD',
  'Mozambique': 'MZ',
  'Papua New Guinea': 'PG',
  'Syria': 'SY',
  'Timor-Leste': 'TL',
  'Turks and Caicos': 'TC'
};

exports.helpContent = `

/$$   /$$ /$$$$$$$$ /$$       /$$$$$$$
| $$  | $$| $$_____/| $$      | $$____$$
| $$  | $$| $$      | $$      | $$    $$
| $$$$$$$$| $$$$$   | $$      | $$$$$$$/
| $$__  $$| $$__/   | $$      | $$____/
| $$  | $$| $$      | $$      | $$
| $$  | $$| $$$$$$$$| $$$$$$$$| $$
|__/  |__/|________/|________/|__/

---------------------------------------------------------------------------------

# Source 1 stats - updated once a day from John Hopkins University
https://corona-stats.online

---------------------------------------------------------------------------------

(DEFAULT SOURCE)
# Source 2 stats - updated every 15 minutes from worldometers.info
https://corona-stats.online?source=2

---------------------------------------------------------------------------------

# Country wise stats

## Format:
https://corona-stats.online/[countryCode]
https://corona-stats.online/[countryName]

## Example: From source 1
https://corona-stats.online/Italy?source=1
https://corona-stats.online/UK?source=1

## Example: From source 2 (DEFAULT)
https://corona-stats.online/italy
https://corona-stats.online/italy?source=2
https://corona-stats.online/UK?source=2
https://corona-stats.online/UK

---------------------------------------------------------------------------------

# Minimal Mode - remove the borders and padding from table

## Example:
https://corona-stats.online?minimal=true
https://corona-stats.online/Italy?minimal=true           (with country filter)
https://corona-stats.online?minimal=true&source=1        (with source)
https://corona-stats.online/uk?source=2&minimal=true     (with source and country)

---------------------------------------------------------------------------------

# Get data as JSON - Add ?format=json

## Example:
https://corona-stats.online?format=json
https://corona-stats.online/Italy?format=json            (with country filter)
https://corona-stats.online/?source=2&format=json        (with source)
https://corona-stats.online/uk?source=2&format=json      (with source and country)

---------------------------------------------------------------------------------

# Get top N countries - Add ?top=N

## Example:
https://corona-stats.online?top=25
https://corona-stats.online?source=1&top=10               (with source)
https://corona-stats.online/uk?minimal=true&top=20        (with minimal)


---------------------------------------------------------------------------------

# Confirmed Cases Graph (WIP)

## Format:
https://corona-stats.online/[countryName]/graph
https://corona-stats.online/[countryCode]/graph

## Example:
https://corona-stats.online/italy/graph
https://corona-stats.online/china/graph


------------- Any issues or feedback - Hit me up on twitter @ekrysis --------------

`;

exports.countryNotFound = (isCurl) =>  {
  const body = `
    Country not found.
    Try the full country name or country code.
    Example:
      - /UK: for United Kingdom
      - /US: for United States of America.
      - /Italy: for Italy.

    ${footer(new Date)}
  `;
  return isCurl ? body : htmlTemplate(body);
};