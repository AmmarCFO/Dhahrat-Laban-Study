import { Scenario, ScenarioType, MarketingVideo, Branch, Competitor } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'long_term',
    type: ScenarioType.LONG_TERM,
    name: 'Long Term Rental',
    color: '#2A5B64', // Teal
    description: 'Leasing the 17 apartments as unfurnished residential units with flexible contracts (6 Months or 1 Year).',
    
    financials: {
        worst: {
            revenue: 591600, // 2900 * 17 * 12
            mabaatShare: 88740, // 15%
            netIncome: 502860, // 85%
            roi: 10.06 // Based on 5M property value
        },
        base: {
            revenue: 652800, // 3200 * 17 * 12
            mabaatShare: 97920, // 15%
            netIncome: 554880, // 85%
            roi: 11.10
        },
        best: {
            revenue: 714000, // 3500 * 17 * 12
            mabaatShare: 107100, // 15%
            netIncome: 606900, // 85%
            roi: 12.14
        }
    },

    propertyValue: 5000000,
    
    unitCount: 17,
    unitLabel: 'Apartments',
    occupancyDurationLabel: '6-12 Months Contracts',
    
    unitMix: [
        { 
            name: '1BR Apartments (First Floor)', 
            count: 8, 
            avgPrice: 3200, 
            priceRange: { min: 2900, avg: 3200, max: 3500 },
        },
        { 
            name: '1BR Apartments (Second Floor)', 
            count: 9, 
            avgPrice: 3200, 
            priceRange: { min: 2900, avg: 3200, max: 3500 },
        },
    ],
  }
];

export const MARKETING_VIDEOS: MarketingVideo[] = [];

export const MABAAT_SHARE_PERCENTAGE = 0.15;
export const BRANCHES: Branch[] = [];

export const COMPETITORS: Competitor[] = [
    // 1Bd Unfurnished
    { name: "Street 224, Dhahrat Laban", price: 2500, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87780718.html" },
    { name: "Al Waqar St, Dhahrat Laban", price: 2000, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87635892.html" },
    { name: "Street 224, Dhahrat Laban", price: 2600, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87781407.html" },
    { name: "New Apt in Dhahrat Laban", price: 2500, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87780718.html" },
    { name: "Apartment for Rent", price: 2500, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://wasalt.sa/property/rent/%D8%B4%D9%82%D8%A9-%D8%A8%D8%BA%D8%B1%D9%81%D8%A9-5817152" },
    { name: "Apartment for Rent", price: 2500, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://wasalt.sa/property/rent/%D8%B4%D9%82%D8%A9-%D8%A8%D8%BA%D8%B1%D9%81%D8%A9-5815811" },
    { name: "Apartment for Rent", price: 2167, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://wasalt.sa/property/rent/%D8%B4%D9%82%D8%A9-%D8%A8%D8%BA%D8%B1%D9%81%D8%A9-5815810" },
    { name: "Asir St, Dhahrat Laban", price: 2700, type: "1Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%B9%D8%B3%D9%8A%D8%B1-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6466358" },
    
    // Unfurnished 2Bd
    { name: "Samtah St, Dhahrat Laban", price: 2500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%B5%D8%A7%D9%85%D8%B7%D8%A9-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6478020" },
    { name: "Nahawand St, Dhahrat Laban", price: 2833, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6508058" },
    { name: "Nablus St, Dhahrat Laban", price: 4400, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%86%D8%A7%D8%A8%D9%84%D8%B3-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6415886" },
    { name: "Al Jameel Ibn Hatim St", price: 3333, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D8%AC%D9%85%D9%8A%D9%84-%D8%A7%D8%A8%D9%86-%D8%AD%D8%A7%D8%AA%D9%85-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6492385" },
    { name: "Al Jameel Ibn Hatim St", price: 4000, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D8%AC%D9%85%D9%8A%D9%84-%D8%A7%D8%A8%D9%86-%D8%AD%D8%A7%D8%AA%D9%85-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6426262" },
    { name: "Al Namas St, Dhahrat Laban", price: 2500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6403206" },
    { name: "Al Namas St, Dhahrat Laban", price: 2500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D9%86%D9%85%D8%A7%D8%B5-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6401913" },
    { name: "Yanbu St, Dhahrat Laban", price: 3500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%8A%D9%86%D8%A8%D8%B9-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6514446" },
    { name: "Watar St, Dhahrat Laban", price: 2500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%88%D8%AA%D8%B1-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6458027" },
    { name: "Yanbu St, Dhahrat Laban", price: 3333, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%8A%D9%86%D8%A8%D8%B9-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6471075" },
    { name: "Al Jawabrah St, Dhahrat Laban", price: 3500, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D8%AC%D9%88%D8%A7%D8%A8%D8%B1%D9%87-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6507593" },
    { name: "2BR Apartment, Laban Suburb", price: 4800, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87748927.html" },
    { name: "Dhahrat Laban, Riyadh", price: 3000, type: "2Bd", furnishing: "Unfurnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87837638.html" },
    
    // Furnished
    { name: "Studio, Dhahrat Laban", price: 2500, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87787881.html" },
    { name: "Dhahrat Laban, West Riyadh", price: 3500, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87682749.html" },
    { name: "Apartment for Rent", price: 5000, type: "1Bd", furnishing: "Furnished", listingUrl: "https://wasalt.sa/property/rent/%D8%B4%D9%82%D8%A9-%D8%A8%D8%BA%D8%B1%D9%81%D8%A9-5819521" },
    { name: "Laban Suburb", price: 3000, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87691501.html" },
    { name: "Al Maadhar", price: 3750, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87828328.html" },
    { name: "Sabtah St, Dhahrat Laban", price: 3000, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87773519.html" },
    { name: "Sabtah St, Dhahrat Laban", price: 3000, type: "1Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87773698.html" },
    { name: "Masafi St, Dhahrat Laban", price: 4000, type: "2Bd", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%85%D8%B5%D8%A7%D9%81%D9%8A-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6511351" },
    { name: "Yanbu St, Dhahrat Laban", price: 4200, type: "2Bd", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%8A%D9%86%D8%A8%D8%B9-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6415383" },
    { name: "Yanbu St, Dhahrat Laban", price: 4000, type: "2Bd", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%8A%D9%86%D8%A8%D8%B9-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6490180" },
    { name: "Nahawand St, Dhahrat Laban", price: 4000, type: "2Bd", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%86%D9%87%D8%A7%D9%88%D9%86%D8%AF-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6402192" },
    { name: "Masafi St, Dhahrat Laban", price: 4200, type: "2Bd", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D9%85%D8%B5%D8%A7%D9%81%D9%8A-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6452932" },
    { name: "Studio, Dhahrat Laban", price: 4000, type: "2Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87774583.html" },
    { name: "Jabal Al Athriat St", price: 4500, type: "2Bd", furnishing: "Furnished", listingUrl: "https://www.bayut.sa/%D8%A7%D9%84%D8%B9%D9%82%D8%A7%D8%B1/%D8%AA%D9%81%D8%A7%D8%B5%D9%8A%D9%84-87678168.html" },
    { name: "Al Qasreen St, Dhahrat Laban", price: 3833, type: "3BR", furnishing: "Furnished", listingUrl: "https://sa.aqar.fm/%D8%B4%D9%82%D9%82-%D9%84%D9%84%D8%A5%D9%8A%D8%AC%D8%A7%D8%B1/%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%BA%D8%B1%D8%A8-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6/%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86/%D8%B4%D8%A7%D8%B1%D8%B9-%D8%A7%D9%84%D9%82%D8%B5%D8%B1%D9%8A%D9%86-%D8%AD%D9%8A-%D8%B8%D9%87%D8%B1%D8%A9-%D9%84%D8%A8%D9%86-%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-%D9%85%D9%86%D8%B7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6-6310736" },
];