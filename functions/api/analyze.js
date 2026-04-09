
const SIGNS = [
  "Aries","Taurus","Gemini","Cancer","Leo","Virgo",
  "Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
];

const PLANETS = ["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn","Rahu","Ketu"];
const NON_LUMINARIES = ["Mars", "Mercury", "Jupiter", "Venus", "Saturn"];
const KENDRAS = [1, 4, 7, 10];
const SUPPORTIVE_HOUSES = [1, 4, 5, 7, 9, 10, 11];
const STRESS_HOUSES = [6, 8, 12];
const MAJOR_DOMAINS = ["Career & Earning", "Wealth & Family", "Marriage & Relationship"];
const REASON_LIMIT = 4;

const signLord = {
  Aries: "Mars",
  Taurus: "Venus",
  Gemini: "Mercury",
  Cancer: "Moon",
  Leo: "Sun",
  Virgo: "Mercury",
  Libra: "Venus",
  Scorpio: "Mars",
  Sagittarius: "Jupiter",
  Capricorn: "Saturn",
  Aquarius: "Saturn",
  Pisces: "Jupiter"
};

const OWN_SIGNS = {
  Sun: ["Leo"],
  Moon: ["Cancer"],
  Mars: ["Aries", "Scorpio"],
  Mercury: ["Gemini", "Virgo"],
  Jupiter: ["Sagittarius", "Pisces"],
  Venus: ["Taurus", "Libra"],
  Saturn: ["Capricorn", "Aquarius"],
  Rahu: [],
  Ketu: []
};

const MOOLATRIKONA_SIGNS = {
  Sun: ["Leo"],
  Moon: ["Taurus"],
  Mars: ["Aries"],
  Mercury: ["Virgo"],
  Jupiter: ["Sagittarius"],
  Venus: ["Libra"],
  Saturn: ["Aquarius"],
  Rahu: [],
  Ketu: []
};

const EXALTATION_SIGNS = {
  Sun: ["Aries"],
  Moon: ["Taurus"],
  Mars: ["Capricorn"],
  Mercury: ["Virgo"],
  Jupiter: ["Cancer"],
  Venus: ["Pisces"],
  Saturn: ["Libra"],
  Rahu: ["Gemini", "Taurus"],
  Ketu: ["Sagittarius", "Scorpio"]
};

const DEBILITATION_SIGNS = {
  Sun: ["Libra"],
  Moon: ["Scorpio"],
  Mars: ["Cancer"],
  Mercury: ["Pisces"],
  Jupiter: ["Capricorn"],
  Venus: ["Virgo"],
  Saturn: ["Aries"],
  Rahu: ["Sagittarius", "Scorpio"],
  Ketu: ["Gemini", "Taurus"]
};

const FUNCTIONAL_STATUS_BY_LAGNA = {
  Aries:       { Sun: "N", Moon: "B", Mars: "Y", Mercury: "N", Jupiter: "N", Venus: "N", Saturn: "M", Rahu: "N", Ketu: "N" },
  Taurus:      { Sun: "M", Moon: "N", Mars: "M", Mercury: "N", Jupiter: "N", Venus: "B", Saturn: "Y", Rahu: "N", Ketu: "N" },
  Gemini:      { Sun: "M", Moon: "M", Mars: "M", Mercury: "Y", Jupiter: "B", Venus: "M", Saturn: "N", Rahu: "N", Ketu: "N" },
  Cancer:      { Sun: "B", Moon: "N", Mars: "Y", Mercury: "M", Jupiter: "N", Venus: "N", Saturn: "M", Rahu: "N", Ketu: "N" },
  Leo:         { Sun: "N", Moon: "M", Mars: "Y", Mercury: "B", Jupiter: "N", Venus: "M", Saturn: "M", Rahu: "N", Ketu: "N" },
  Virgo:       { Sun: "M", Moon: "M", Mars: "M", Mercury: "N", Jupiter: "B", Venus: "M", Saturn: "N", Rahu: "N", Ketu: "N" },
  Libra:       { Sun: "M", Moon: "M", Mars: "M", Mercury: "B", Jupiter: "N", Venus: "N", Saturn: "Y", Rahu: "N", Ketu: "N" },
  Scorpio:     { Sun: "M", Moon: "B", Mars: "Y", Mercury: "N", Jupiter: "M", Venus: "M", Saturn: "M", Rahu: "N", Ketu: "N" },
  Sagittarius: { Sun: "N", Moon: "M", Mars: "M", Mercury: "M", Jupiter: "N", Venus: "N", Saturn: "M", Rahu: "N", Ketu: "N" },
  Capricorn:   { Sun: "M", Moon: "M", Mars: "Y", Mercury: "B", Jupiter: "N", Venus: "M", Saturn: "N", Rahu: "N", Ketu: "N" },
  Aquarius:    { Sun: "M", Moon: "M", Mars: "N", Mercury: "B", Jupiter: "N", Venus: "M", Saturn: "N", Rahu: "N", Ketu: "N" },
  Pisces:      { Sun: "M", Moon: "N", Mars: "M", Mercury: "N", Jupiter: "B", Venus: "N", Saturn: "M", Rahu: "N", Ketu: "N" }
};

const FUNCTIONAL_SCORE = { B: 2, M: -2, N: 0, Y: 3 };
const DOMAIN_WEIGHTS = {
  "Career & Earning": 1.5,
  "Wealth & Family": 1.5,
  "Marriage & Relationship": 1.3,
  "Health": 1.2,
  "Identity & Personality": 1.0,
  "Restraint": 0.8
};

const COMBUSTION_ORBS = {
  Moon: 12,
  Mars: 17,
  Mercury: 14,
  Jupiter: 11,
  Venus: 10,
  Saturn: 15
};

const DOMAIN_CONFIG = [
  {
    title: "Identity & Personality",
    houses: [1],
    karakas: ["Sun", "Moon"],
    overview:
      "Identity is primarily read from Lagna, Lagna lord, Sun, and Moon. D1 shows how the native expresses self in outer life, while D9 shows whether that identity matures into a settled and durable pattern.",
    flagLogic:
      "Vulnerable appears when Lagna support is weak, key karakas are under pressure, or the self-pattern does not hold well in D9. Developing appears when some support exists but the chart does not hold uniformly."
  },
  {
    title: "Wealth & Family",
    houses: [2, 11],
    karakas: ["Jupiter", "Venus", "Mercury"],
    overview:
      "Wealth and family tone are judged from the 2nd house, gains from the 11th, and support from Jupiter, Venus, and Mercury. D1 shows earning and family pattern, while D9 shows whether stability, values, and continuity hold over time.",
    flagLogic:
      "Vulnerable appears when wealth houses or their lords face affliction, especially with pressure from Saturn, Rahu, Ketu, or Mars. Developing shows support exists, but retention, family harmony, or gains remain uneven."
  },
  {
    title: "Marriage & Relationship",
    houses: [7, 8, 12],
    karakas: ["Venus", "Jupiter", "Moon"],
    overview:
      "Marriage is read from the 7th house, 7th lord, Venus, Moon, and sustaining houses like the 8th and 12th. D1 shows visible relationship promise, while D9 shows maturity, endurance, and later-life quality of bond.",
    flagLogic:
      "Vulnerable appears when relationship houses and Venus are repeatedly pressured in both D1 and D9. Developing shows attraction or promise exists, but continuity, emotional balance, or mutual adjustment needs work."
  },
  {
    title: "Career & Earning",
    houses: [10, 11, 6],
    karakas: ["Sun", "Saturn", "Mercury", "Jupiter"],
    overview:
      "Career is read from the 10th house, service and effort from the 6th, gains from the 11th, and support from Sun, Saturn, Mercury, and Jupiter. D1 shows active work pattern, while D9 shows whether career results mature into stable recognition and earning continuity.",
    flagLogic:
      "Vulnerable appears when career houses, their lords, and work karakas are pressured with little D9 support. Developing means there is real potential, but movement may be delayed, uneven, or effort-heavy."
  },
  {
    title: "Restraint",
    houses: [12, 8],
    karakas: ["Saturn", "Ketu", "Moon"],
    overview:
      "Restraint is judged from the 12th house, withdrawal patterns, Saturn’s discipline, Ketu’s detachment, and Moon’s emotional regulation. This domain reflects boundaries, internal control, and how impulses are held or released.",
    flagLogic:
      "Vulnerable appears when the 12th axis and emotional regulation factors are afflicted, making self-restraint inconsistent. Developing means restraint exists in parts, but is not steady under pressure."
  },
  {
    title: "Health",
    houses: [6, 8, 12],
    karakas: ["Sun", "Moon", "Saturn", "Mars"],
    overview:
      "Health is read from the 6th, 8th, and 12th houses along with vitality from Sun, emotional resilience from Moon, and stress signatures from Saturn and Mars. D1 shows visible health pressure, while D9 shows whether recovery and long-run endurance improve or weaken.",
    flagLogic:
      "Vulnerable appears when dusthana houses and health karakas take repeated pressure. Developing means the chart shows sensitivity or periodic strain, but not a uniformly damaged pattern."
  }
];

const HOUSE_SIGN_BY_LAGNA = {};
SIGNS.forEach((lagna, idx) => {
  HOUSE_SIGN_BY_LAGNA[lagna] = {};
  for (let h = 1; h <= 12; h += 1) {
    HOUSE_SIGN_BY_LAGNA[lagna][h] = SIGNS[(idx + h - 1) % 12];
  }
});

function normalizeInputHouses(houses) {
  const out = {};
  for (let i = 1; i <= 12; i += 1) {
    if (Array.isArray(houses?.[i])) {
      out[i] = houses[i].map(cleanPlanetName).filter(Boolean);
    } else if (Array.isArray(houses?.[String(i)])) {
      out[i] = houses[String(i)].map(cleanPlanetName).filter(Boolean);
    } else {
      out[i] = [];
    }
  }
  return out;
}

function cleanPlanetName(name) {
  if (!name) return "";
  const clean = String(name).trim().toLowerCase();
  if (!clean) return "";
  return clean.charAt(0).toUpperCase() + clean.slice(1);
}

function getPlanetHouse(houses, planet) {
  for (let i = 1; i <= 12; i += 1) {
    if ((houses[i] || []).includes(planet)) return i;
  }
  return null;
}

function houseSign(lagnaSign, houseNum) {
  return HOUSE_SIGN_BY_LAGNA[lagnaSign]?.[houseNum] || null;
}

function functionalStatus(planet, lagna) {
  return FUNCTIONAL_STATUS_BY_LAGNA[lagna]?.[planet] || "N";
}

function functionalScore(planet, lagna) {
  return FUNCTIONAL_SCORE[functionalStatus(planet, lagna)] ?? 0;
}

function getHouseFromReference(baseHouse, offset) {
  return ((baseHouse - 1 + offset) % 12) + 1;
}

function relativeHouse(fromHouse, toHouse) {
  return ((toHouse - fromHouse + 12) % 12) + 1;
}

function isKendraFromReference(referenceHouse, targetHouse) {
  return KENDRAS.includes(relativeHouse(referenceHouse, targetHouse));
}

function buildPlanetMap(houses) {
  const map = {};
  PLANETS.forEach((planet) => {
    const house = getPlanetHouse(houses, planet);
    if (house !== null) {
      map[planet] = {
        house,
        sign: null
      };
    }
  });
  return map;
}

function normalizeCoords(input) {
  const out = {};
  if (!input || typeof input !== "object") return out;
  Object.entries(input).forEach(([key, value]) => {
    const planet = cleanPlanetName(key);
    const num = Number(value);
    if (PLANETS.includes(planet) && Number.isFinite(num)) {
      out[planet] = num;
    }
  });
  return out;
}

function getDignityState(planet, sign, chartInfo) {
  if (!planet || !sign) {
    return { state: "other", modifier: 0, neechaBhanga: false };
  }

  const exalted = EXALTATION_SIGNS[planet]?.includes(sign);
  const own = OWN_SIGNS[planet]?.includes(sign);
  const moola = MOOLATRIKONA_SIGNS[planet]?.includes(sign);
  const debilitated = DEBILITATION_SIGNS[planet]?.includes(sign);

  if (debilitated) {
    const neechaBhanga = hasNeechaBhanga(planet, sign, chartInfo);
    return {
      state: neechaBhanga ? "neecha_bhanga" : "debilitated",
      modifier: neechaBhanga ? 0 : -1,
      neechaBhanga
    };
  }
  if (exalted) return { state: "exalted", modifier: 1, neechaBhanga: false };
  if (own) return { state: "own_sign", modifier: 1, neechaBhanga: false };
  if (moola) return { state: "moolatrikona", modifier: 1, neechaBhanga: false };
  return { state: "other", modifier: 0, neechaBhanga: false };
}

function hasNeechaBhanga(planet, sign, chartInfo) {
  const dispositor = signLord[sign];
  if (!dispositor) return false;

  const dispositorHouse = chartInfo.planetHouses[dispositor];
  if (!dispositorHouse) return false;

  const lagnaKendra = isKendraFromReference(1, dispositorHouse);
  const moonHouse = chartInfo.planetHouses.Moon;
  const moonKendra = moonHouse ? isKendraFromReference(moonHouse, dispositorHouse) : false;

  return lagnaKendra || moonKendra;
}

function getSupportBucket(houseNum) {
  if (SUPPORTIVE_HOUSES.includes(houseNum)) return "supportive";
  if (STRESS_HOUSES.includes(houseNum)) return "stress";
  return "neutral";
}

function createReason(text, scoreDelta, type, chart, extras = {}) {
  return {
    text,
    scoreDelta,
    type,
    chart,
    ...extras
  };
}

function makeChartInfo(chart, chartLabel) {
  const houses = normalizeInputHouses(chart.houses);
  const lagnaSign = chart.lagnaSign;
  const planetMap = buildPlanetMap(houses);
  const planetHouses = {};
  const planetSigns = {};
  Object.entries(planetMap).forEach(([planet, info]) => {
    planetHouses[planet] = info.house;
    planetSigns[planet] = houseSign(lagnaSign, info.house);
  });

  return {
    label: chartLabel,
    lagnaSign,
    houses,
    planetMap,
    planetHouses,
    planetSigns,
    longitudes: normalizeCoords(chart.longitudes),
    latitudes: normalizeCoords(chart.latitudes),
    retrograde: new Set((Array.isArray(chart.retrograde) ? chart.retrograde : []).map(cleanPlanetName))
  };
}

function computeThresholds(config) {
  const maxScore = (config.houses.length * 2) + 2 + config.karakas.length;
  return {
    maxScore,
    strong: Number((0.4 * maxScore).toFixed(1)),
    weak: Number((-0.15 * maxScore).toFixed(1))
  };
}

function getAspectedHouses(planet, planetHouse) {
  if (!planetHouse) return [];
  const set = new Set([getHouseFromReference(planetHouse, 6)]);
  if (planet === "Mars") {
    set.add(getHouseFromReference(planetHouse, 3));
    set.add(getHouseFromReference(planetHouse, 7));
  }
  if (planet === "Jupiter") {
    set.add(getHouseFromReference(planetHouse, 4));
    set.add(getHouseFromReference(planetHouse, 8));
  }
  if (planet === "Saturn") {
    set.add(getHouseFromReference(planetHouse, 2));
    set.add(getHouseFromReference(planetHouse, 9));
  }
  return Array.from(set);
}

function detectCombustion(chartInfo) {
  const effects = {};
  const flags = {};
  const reasons = {};
  const sunLon = chartInfo.longitudes.Sun;
  if (!Number.isFinite(sunLon)) return { effects, flags, reasons };

  PLANETS.forEach((planet) => {
    if (["Sun", "Rahu", "Ketu"].includes(planet)) return;
    const lon = chartInfo.longitudes[planet];
    if (!Number.isFinite(lon)) return;

    let orb = COMBUSTION_ORBS[planet];
    if (planet === "Mercury" && chartInfo.retrograde.has("Mercury")) orb = 13;
    if (planet === "Venus" && chartInfo.retrograde.has("Venus")) orb = 8;

    let diff = Math.abs(lon - sunLon);
    if (diff > 180) diff = 360 - diff;

    if (diff <= orb) {
      effects[planet] = -1;
      flags[planet] = `COMBUST_${planet.toUpperCase()}`;
      reasons[planet] = `${planet} is combust — reduced effectiveness.`;
    }
  });

  return { effects, flags, reasons };
}

function detectGrahaYuddha(chartInfo) {
  const effects = {};
  const flags = {};
  const reasons = {};

  for (let i = 0; i < NON_LUMINARIES.length; i += 1) {
    for (let j = i + 1; j < NON_LUMINARIES.length; j += 1) {
      const p1 = NON_LUMINARIES[i];
      const p2 = NON_LUMINARIES[j];
      const lon1 = chartInfo.longitudes[p1];
      const lon2 = chartInfo.longitudes[p2];
      const lat1 = chartInfo.latitudes[p1];
      const lat2 = chartInfo.latitudes[p2];
      if (![lon1, lon2, lat1, lat2].every(Number.isFinite)) continue;

      let diff = Math.abs(lon1 - lon2);
      if (diff > 180) diff = 360 - diff;
      if (diff > 1.0) continue;

      const loser = lat1 < lat2 ? p1 : p2;
      effects[loser] = (effects[loser] || 0) - 1;
      flags[loser] = `GRAHA_YUDDHA_${loser.toUpperCase()}`;
      reasons[loser] = `${loser} is defeated in planetary war.`;
    }
  }

  return { effects, flags, reasons };
}

function scoreSingleChartDomain(chartInfo, config) {
  const thresholds = computeThresholds(config);
  const flags = new Set();
  const reasons = [];
  let score = 0;

  const combustion = detectCombustion(chartInfo);
  const yuddha = detectGrahaYuddha(chartInfo);

  config.houses.forEach((houseNum) => {
    const sign = houseSign(chartInfo.lagnaSign, houseNum);
    const lord = sign ? signLord[sign] : null;
    const housePlanets = chartInfo.houses[houseNum] || [];

    housePlanets.forEach((planet) => {
      const status = functionalStatus(planet, chartInfo.lagnaSign);
      const base = functionalScore(planet, chartInfo.lagnaSign);
      const dignity = getDignityState(planet, sign, chartInfo);
      let planetScore = base + dignity.modifier;

      if (combustion.effects[planet]) {
        planetScore += combustion.effects[planet];
        flags.add(combustion.flags[planet]);
        reasons.push(createReason(combustion.reasons[planet], combustion.effects[planet], "COMBUSTION", chartInfo.label, { planet, house: houseNum }));
      }
      if (yuddha.effects[planet]) {
        planetScore += yuddha.effects[planet];
        flags.add(yuddha.flags[planet]);
        reasons.push(createReason(yuddha.reasons[planet], yuddha.effects[planet], "GRAHA_YUDDHA", chartInfo.label, { planet, house: houseNum }));
      }

      score += planetScore;
      const tone = planetScore >= 0 ? "supports" : "pressures";
      reasons.push(createReason(
        `${planet} ${tone} house ${houseNum} with functional score ${base}${dignity.modifier ? ` and dignity modifier ${dignity.modifier > 0 ? "+1" : "-1"}` : ""}.`,
        planetScore,
        "HOUSE_PLANET",
        chartInfo.label,
        { planet, house: houseNum }
      ));

      if (status === "Y") flags.add(`YOGAKARAKA_${planet.toUpperCase()}`);
      if (dignity.neechaBhanga) {
        flags.add("NEECHA_BHANGA");
        reasons.push(createReason(
          `${planet} has debility cancellation (Neecha Bhanga), so the dignity penalty is removed.`,
          0,
          "DIGNITY",
          chartInfo.label,
          { planet, house: houseNum }
        ));
      }
    });

    if (!lord) {
      reasons.push(createReason(`House ${houseNum} sign could not be resolved from lagna.`, -1, "LORD", chartInfo.label, { house: houseNum }));
      score -= 1;
      flags.add(`HOUSE_${houseNum}_SIGN_MISSING`);
      return;
    }

    const lordHouse = chartInfo.planetHouses[lord];
    const lordSign = chartInfo.planetSigns[lord];
    if (!lordHouse) {
      reasons.push(createReason(`House ${houseNum} lord ${lord} could not be located in the chart.`, -1, "LORD", chartInfo.label, { planet: lord, house: houseNum }));
      score -= 1;
      flags.add(`HOUSE_${houseNum}_LORD_MISSING`);
      return;
    }

    const lordStatus = functionalStatus(lord, chartInfo.lagnaSign);
    const lordDignity = getDignityState(lord, lordSign, chartInfo);
    const bucket = getSupportBucket(lordHouse);
    let lordBase = 0;
    if (bucket === "supportive") {
      lordBase = lordStatus === "Y" ? 3 : 2;
    } else if (bucket === "stress") {
      lordBase = -2;
    }
    const lordScore = lordBase + lordDignity.modifier;
    score += lordScore;

    if (lordDignity.neechaBhanga) {
      flags.add("NEECHA_BHANGA");
      reasons.push(createReason(
        `${lord} gains Neecha Bhanga support in its placement.`,
        0,
        "DIGNITY",
        chartInfo.label,
        { planet: lord, house: lordHouse }
      ));
    }

    if (lordStatus === "Y") flags.add(`YOGAKARAKA_${lord.toUpperCase()}`);
    if (bucket === "stress") flags.add(`HOUSE_${houseNum}_LORD_UNDER_STRESS`);

    reasons.push(createReason(
      `House ${houseNum} lord ${lord} sits in house ${lordHouse}${lordDignity.modifier ? ` with dignity modifier ${lordDignity.modifier > 0 ? "+1" : "-1"}` : ""}.`,
      lordScore,
      "LORD",
      chartInfo.label,
      { planet: lord, house: lordHouse }
    ));
  });

  config.karakas.forEach((planet) => {
    const house = chartInfo.planetHouses[planet];
    if (!house) return;
    const bucket = getSupportBucket(house);
    let delta = 0;
    if (bucket === "supportive") delta = 1;
    if (bucket === "stress") delta = -1;
    if (!delta) return;

    score += delta;
    if (delta < 0) flags.add(`${planet.toUpperCase()}_UNDER_PRESSURE`);
    reasons.push(createReason(
      `${planet} ${delta > 0 ? "supports" : "adds strain to"} this domain from house ${house}.`,
      delta,
      "KARAKA",
      chartInfo.label,
      { planet, house }
    ));
  });

  config.houses.forEach((domainHouse) => {
    PLANETS.forEach((planet) => {
      const planetHouse = chartInfo.planetHouses[planet];
      if (!planetHouse) return;
      if (!getAspectedHouses(planet, planetHouse).includes(domainHouse)) return;
      const status = functionalStatus(planet, chartInfo.lagnaSign);
      let delta = 0;
      if (["B", "Y"].includes(status)) delta = 1;
      if (status === "M") delta = -1;
      if (!delta) return;
      score += delta;
      if (delta < 0) flags.add(`MALEFIC_ASPECT_${domainHouse}`);
      reasons.push(createReason(
        `${planet} casts ${delta > 0 ? "beneficial" : "malefic"} aspect on house ${domainHouse}.`,
        delta,
        "ASPECT",
        chartInfo.label,
        { planet, house: domainHouse }
      ));
    });
  });

  const strength = score >= thresholds.strong ? "Strong" : score <= thresholds.weak ? "Weak" : "Developing";

  return {
    score: Number(score.toFixed(1)),
    strength,
    thresholds,
    flags: Array.from(flags),
    reasons
  };
}

function getKendraTrikonaLords(lagna) {
  const kendraHouses = [1, 4, 7, 10];
  const trikonaHouses = [1, 5, 9];
  const kendraLords = new Set(kendraHouses.map((house) => signLord[houseSign(lagna, house)]));
  const trikonaLords = new Set(trikonaHouses.map((house) => signLord[houseSign(lagna, house)]));
  return { kendraLords, trikonaLords };
}

function sameHouse(chartInfo, p1, p2) {
  const h1 = chartInfo.planetHouses[p1];
  const h2 = chartInfo.planetHouses[p2];
  return h1 && h2 && h1 === h2;
}

function aspectsPlanet(chartInfo, p1, p2) {
  const h1 = chartInfo.planetHouses[p1];
  const h2 = chartInfo.planetHouses[p2];
  if (!h1 || !h2) return false;
  return getAspectedHouses(p1, h1).includes(h2);
}

function detectYogas(chartInfo) {
  const yogas = [];

  const pmChecks = [
    { name: "Hamsa", planet: "Jupiter", domains: ["Marriage & Relationship", "Career & Earning"] },
    { name: "Malavya", planet: "Venus", domains: ["Marriage & Relationship", "Wealth & Family"] },
    { name: "Ruchaka", planet: "Mars", domains: ["Career & Earning", "Health"] },
    { name: "Sasa", planet: "Saturn", domains: ["Career & Earning", "Restraint"] },
    { name: "Bhadra", planet: "Mercury", domains: ["Career & Earning", "Wealth & Family"] }
  ];

  pmChecks.forEach((item) => {
    const house = chartInfo.planetHouses[item.planet];
    const sign = chartInfo.planetSigns[item.planet];
    if (!house || !sign) return;
    const goodDignity = OWN_SIGNS[item.planet]?.includes(sign) || EXALTATION_SIGNS[item.planet]?.includes(sign);
    if (goodDignity && KENDRAS.includes(house)) {
      yogas.push({ name: item.name, type: "BOOST", domains: item.domains, text: `${item.name} yoga detected through ${item.planet}.` });
    }
  });

  const { kendraLords, trikonaLords } = getKendraTrikonaLords(chartInfo.lagnaSign);
  const kendraList = Array.from(kendraLords).filter(Boolean);
  const trikonaList = Array.from(trikonaLords).filter(Boolean);
  const hasRajaYoga = kendraList.some((kLord) => trikonaList.some((tLord) => sameHouse(chartInfo, kLord, tLord) || aspectsPlanet(chartInfo, kLord, tLord) || aspectsPlanet(chartInfo, tLord, kLord)));
  if (hasRajaYoga) {
    yogas.push({ name: "Raja Yoga", type: "BOOST_TO_STABLE", domains: ["Career & Earning", ...DOMAIN_CONFIG.map((d) => d.title)], text: "Raja Yoga detected through kendra-trikona lord linkage." });
  }

  const wealthLords = [2, 11, 5, 9].map((house) => signLord[houseSign(chartInfo.lagnaSign, house)]).filter(Boolean);
  const wealthLinked = wealthLords.some((p1, idx) => wealthLords.slice(idx + 1).some((p2) => sameHouse(chartInfo, p1, p2) || aspectsPlanet(chartInfo, p1, p2) || aspectsPlanet(chartInfo, p2, p1)));
  if (wealthLinked) {
    yogas.push({ name: "Dhana Yoga", type: "BOOST_TO_STABLE", domains: ["Wealth & Family", "Career & Earning"], text: "Dhana Yoga detected through combined wealth lord influence." });
  }

  const dusthanaLords = [6, 8, 12].map((house) => ({ house, lord: signLord[houseSign(chartInfo.lagnaSign, house)] }));
  const hasViparita = dusthanaLords.some(({ house, lord }) => {
    const lordHouse = chartInfo.planetHouses[lord];
    return lordHouse && STRESS_HOUSES.includes(lordHouse) && lordHouse !== house;
  });
  if (hasViparita) {
    yogas.push({ name: "Viparita Raja Yoga", type: "REMOVE_VULNERABLE", domains: ["Health", "Restraint"], text: "Viparita Raja Yoga detected through dusthana-lord reversal." });
  }

  PLANETS.forEach((planet) => {
    const sign = chartInfo.planetSigns[planet];
    if (!sign || !DEBILITATION_SIGNS[planet]?.includes(sign)) return;
    const dignity = getDignityState(planet, sign, chartInfo);
    if (dignity.neechaBhanga) {
      yogas.push({ name: "Neecha Bhanga Raja Yoga", type: "NEECHA_BHANGA", domains: DOMAIN_CONFIG.filter((d) => d.houses.includes(chartInfo.planetHouses[planet])).map((d) => d.title), text: `${planet} receives Neecha Bhanga support.` });
    }
  });

  const moonHouse = chartInfo.planetHouses.Moon;
  if (moonHouse) {
    const secondFromMoon = getHouseFromReference(moonHouse, 1);
    const twelfthFromMoon = getHouseFromReference(moonHouse, 11);
    const hasSupportAroundMoon = [secondFromMoon, twelfthFromMoon].some((house) => (chartInfo.houses[house] || []).some((planet) => planet !== "Moon"));
    if (!hasSupportAroundMoon) {
      yogas.push({ name: "Kemadruma Yoga", type: "SUPPRESS", domains: ["Identity & Personality", "Wealth & Family"], text: "Kemadruma Yoga detected around the Moon." });
    }
  }

  return yogas;
}

function elevateStrength(current) {
  if (current === "Weak") return "Developing";
  if (current === "Developing") return "Strong";
  return current;
}

function applyYogaStrengthOverrides(baseResult, yogas, domainTitle, chartLabel) {
  const flags = new Set(baseResult.flags);
  const reasons = [...baseResult.reasons];
  let strength = baseResult.strength;

  yogas.forEach((yoga) => {
    if (!yoga.domains.includes(domainTitle)) return;

    if (["BOOST", "BOOST_TO_STABLE"].includes(yoga.type)) {
      const prev = strength;
      strength = elevateStrength(strength);
      flags.add(`YOGA_${yoga.name.toUpperCase().replace(/\s+/g, "_")}`);
      if (strength !== prev) {
        reasons.push(createReason(`${yoga.text} Domain strength is elevated in ${chartLabel}.`, 1, "YOGA", chartLabel));
      }
    }

    if (yoga.type === "SUPPRESS" && baseResult.score < 0 && strength !== "Weak") {
      strength = "Weak";
      flags.add(`YOGA_NEGATIVE_${yoga.name.toUpperCase().replace(/\s+/g, "_")}`);
      reasons.push(createReason(`${yoga.text} This increases vulnerability in ${chartLabel}.`, -1, "YOGA", chartLabel));
    }
  });

  return {
    ...baseResult,
    strength,
    flags: Array.from(flags),
    reasons
  };
}

function combineVerdict(d1Strength, d9Strength) {
  if (d1Strength === "Strong" && d9Strength === "Strong") return "Stable";
  if (d1Strength === "Weak" && d9Strength === "Weak") return "Vulnerable";
  if (d1Strength === "Strong" && d9Strength === "Weak") return "Early promise, later inconsistency";
  if (d1Strength === "Weak" && d9Strength === "Strong") return "Delayed but improving";
  if (d1Strength === "Developing" && d9Strength === "Developing") return "Developing";
  if (d1Strength === "Strong" || d9Strength === "Strong") return "Moderately supported";
  return "Developing";
}

function sortAndTrimReasons(reasons) {
  return reasons
    .filter((reason) => Math.abs(reason.scoreDelta) > 0 || ["YOGA", "COMBUSTION", "GRAHA_YUDDHA"].includes(reason.type))
    .sort((a, b) => Math.abs(b.scoreDelta) - Math.abs(a.scoreDelta))
    .slice(0, REASON_LIMIT)
    .map((reason) => reason.text);
}

function cleanFlags(flags) {
  return Array.from(new Set(flags)).map((flag) => flag.replace(/_/g, " "));
}

function buildDomainResult(d1ChartInfo, d9ChartInfo, config) {
  const d1Base = scoreSingleChartDomain(d1ChartInfo, config);
  const d9Base = scoreSingleChartDomain(d9ChartInfo, config);
  const d1Yogas = detectYogas(d1ChartInfo);
  const d9Yogas = detectYogas(d9ChartInfo);

  const d1Result = applyYogaStrengthOverrides(d1Base, d1Yogas, config.title, d1ChartInfo.label);
  const d9Result = applyYogaStrengthOverrides(d9Base, d9Yogas, config.title, d9ChartInfo.label);

  let verdict = combineVerdict(d1Result.strength, d9Result.strength);

  const yogaFlags = [];
  const yogaReasons = [];
  [...d1Yogas, ...d9Yogas].forEach((yoga) => {
    if (!yoga.domains.includes(config.title)) return;
    if (yoga.type === "REMOVE_VULNERABLE" && verdict === "Vulnerable") {
      verdict = "Developing";
      yogaFlags.push(`YOGA_${yoga.name.toUpperCase().replace(/\s+/g, "_")}`);
      yogaReasons.push(createReason(`${yoga.text} Final verdict is softened from vulnerable.`, 1, "YOGA", "Combined"));
    }
    if (["BOOST", "BOOST_TO_STABLE"].includes(yoga.type) && ["Developing", "Moderately supported"].includes(verdict)) {
      verdict = "Stable";
      yogaFlags.push(`YOGA_${yoga.name.toUpperCase().replace(/\s+/g, "_")}`);
      yogaReasons.push(createReason(`${yoga.text} Final verdict is elevated.`, 1, "YOGA", "Combined"));
    }
    if (yoga.type === "SUPPRESS" && verdict !== "Vulnerable" && ((d1Result.score + d9Result.score) / 2) < 0) {
      verdict = "Vulnerable";
      yogaFlags.push(`YOGA_NEGATIVE_${yoga.name.toUpperCase().replace(/\s+/g, "_")}`);
      yogaReasons.push(createReason(`${yoga.text} Final verdict is pulled downward.`, -1, "YOGA", "Combined"));
    }
  });

  const mergedReasons = [...d1Result.reasons, ...d9Result.reasons, ...yogaReasons];

  return {
    title: config.title,
    d1Strength: d1Result.strength,
    d9Strength: d9Result.strength,
    verdict,
    factorOverview: config.overview,
    flagLogic: config.flagLogic,
    flags: cleanFlags([...d1Result.flags, ...d9Result.flags, ...yogaFlags]),
    reasons: sortAndTrimReasons(mergedReasons),
    debug: {
      d1Score: d1Result.score,
      d9Score: d9Result.score,
      d1Thresholds: d1Result.thresholds,
      d9Thresholds: d9Result.thresholds
    }
  };
}

function buildSummary(domains) {
  const weightedStable = domains
    .filter((d) => d.verdict === "Stable")
    .reduce((sum, d) => sum + (DOMAIN_WEIGHTS[d.title] || 1), 0);

  const weightedVulnerable = domains
    .filter((d) => d.verdict === "Vulnerable")
    .reduce((sum, d) => sum + (DOMAIN_WEIGHTS[d.title] || 1), 0);

  const improvingCount = domains.filter((d) => ["Delayed but improving", "Early promise, later inconsistency"].includes(d.verdict)).length;

  let overallPattern = "Balanced with selective strengths and work areas.";
  if (weightedStable >= 4.0) {
    overallPattern = "Chart shows broad structural support across important life domains.";
  } else if (weightedVulnerable >= 3.5) {
    overallPattern = "Chart shows repeated stress signatures and needs careful handling across major domains.";
  } else if (improvingCount >= 2) {
    overallPattern = "Chart suggests early unevenness with noticeable later-life strengthening.";
  }

  const earlyStrong = domains.filter((d) => d.d1Strength === "Strong").map((d) => d.title);
  const lateStrong = domains.filter((d) => d.d9Strength === "Strong").map((d) => d.title);

  const earlyLife = earlyStrong.length > 2 && earlyStrong.some((d) => MAJOR_DOMAINS.includes(d))
    ? "Outer-life promise is visible early, including at least one major life domain."
    : "Early-life movement may require effort and correction before major domains settle.";

  const laterLife = lateStrong.length > 2 && lateStrong.some((d) => MAJOR_DOMAINS.includes(d))
    ? "Later-life consolidation looks stronger and more settled, including a major life domain."
    : "Later-life results need conscious strengthening for stability in the more material domains.";

  return {
    overallPattern,
    earlyLife,
    laterLife,
    weightedStable: Number(weightedStable.toFixed(1)),
    weightedVulnerable: Number(weightedVulnerable.toFixed(1))
  };
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const d1 = makeChartInfo({
      lagnaSign: body?.d1?.lagnaSign,
      houses: body?.d1?.houses,
      longitudes: body?.d1?.longitudes,
      latitudes: body?.d1?.latitudes,
      retrograde: body?.d1?.retrograde
    }, "D1");

    const d9 = makeChartInfo({
      lagnaSign: body?.d9?.lagnaSign,
      houses: body?.d9?.houses,
      longitudes: body?.d9?.longitudes,
      latitudes: body?.d9?.latitudes,
      retrograde: body?.d9?.retrograde
    }, "D9");

    if (!d1.lagnaSign || !d9.lagnaSign) {
      return Response.json({ error: "D1 and D9 lagna signs are required." }, { status: 400 });
    }

    const domains = DOMAIN_CONFIG.map((config) => buildDomainResult(d1, d9, config));
    const summary = buildSummary(domains);

    return Response.json({
      generatedAt: new Date().toISOString(),
      summary,
      domains,
      meta: {
        scoringVersion: "patched-rule-logic-v2",
        optionalAdvancedInputsDetected: {
          d1Longitudes: Object.keys(d1.longitudes).length > 0,
          d1Latitudes: Object.keys(d1.latitudes).length > 0,
          d9Longitudes: Object.keys(d9.longitudes).length > 0,
          d9Latitudes: Object.keys(d9.latitudes).length > 0
        }
      }
    });
  } catch (error) {
    return Response.json({ error: error.message || "Unexpected error." }, { status: 500 });
  }
}

