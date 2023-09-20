import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

const resList = [
  {
    id: "254192",
    name: "McDonald's",
    cloudinaryImageId: "6dc3ed2ca21d71acff7c2a51dfe4c720",
    locality: "Sector 10",
    areaName: "Rohini",
    costForTwo: "₹400 for two",
    cuisines: ["American"],
    avgRating: 4.2,
    feeDetails: {
      restaurantId: "254192",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "630",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "22 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 01:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "443492",
    name: "EatFit",
    cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
    locality: "Sector 7",
    areaName: "Rohini",
    costForTwo: "₹250 for two",
    cuisines: [
      "Chinese",
      "Healthy Food",
      "Tandoor",
      "Pizzas",
      "North Indian",
      "Thalis",
      "Biryani",
    ],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "443492",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "76139",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 18,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "18 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "brand",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "83528",
    name: "Canteen Central-Chai, Maggi aur Snacks",
    cloudinaryImageId: "9ca06743f33d3a940100194672eb23e9",
    locality: "Village Naharpur",
    areaName: "Rohini",
    costForTwo: "₹300 for two",
    cuisines: [
      "Street Food",
      "Fast Food",
      "North Indian",
      "Italian",
      "Snacks",
      "Burgers",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4,
    feeDetails: {
      restaurantId: "83528",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "346157",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 17,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "17 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "432780",
    name: "Paratha Box - Desi Punjabi Meals",
    cloudinaryImageId: "t1ycq1zgn0n0lbb7v4e4",
    locality: "Sector 7",
    areaName: "Rohini",
    costForTwo: "₹250 for two",
    cuisines: ["North Indian", "Punjabi", "Indian", "Home Food", "Beverages"],
    avgRating: 3.7,
    feeDetails: {
      restaurantId: "432780",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "306004",
    avgRatingString: "3.7",
    totalRatingsString: "50+",
    sla: {
      deliveryTime: 21,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "21 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:45:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹150 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "341033",
    name: "Bakingo",
    cloudinaryImageId: "rmnzl74nmlldrsv9bnvk",
    locality: "Rithala",
    areaName: "Rohini",
    costForTwo: "₹300 for two",
    cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
    avgRating: 4.4,
    feeDetails: {
      restaurantId: "341033",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4200,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4200,
    },
    parentId: "3818",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "15846",
    name: "Faasos - Wraps & Rolls",
    cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
    locality: "Sector 8",
    areaName: "Rohini",
    costForTwo: "₹200 for two",
    cuisines: [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.2,
    feeDetails: {
      restaurantId: "15846",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "21809",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 03:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "62876",
    name: "LunchBox - Meals and Thalis",
    cloudinaryImageId: "dr7zk0fge6mhr6xtsfat",
    locality: "Sector 8",
    areaName: "Rohini",
    costForTwo: "₹200 for two",
    cuisines: [
      "Biryani",
      "North Indian",
      "Punjabi",
      "Healthy Food",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "62876",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 3600,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 3600,
    },
    parentId: "4925",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "25 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹399",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "9753",
    name: "Sagar Ratna",
    cloudinaryImageId: "anbk8hcyfk1deucamf1y",
    locality: "Lala Jagat Narayan Marg",
    areaName: "Pitampura",
    costForTwo: "₹450 for two",
    cuisines: ["South Indian", "North Indian", "Chinese", "Desserts"],
    avgRating: 4.1,
    veg: true,
    feeDetails: {
      restaurantId: "9753",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4800,
    },
    parentId: "793",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 29,
      lastMileTravel: 4.3,
      serviceability: "SERVICEABLE",
      slaString: "29 mins",
      lastMileTravelString: "4.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "17843",
    name: "Cafe Coffee Day",
    cloudinaryImageId: "b925459fbc1faf59f02f7289eb079a74",
    locality: "Prashanth Vihar Road",
    areaName: "Prashant Vihar",
    costForTwo: "₹300 for two",
    cuisines: [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Burgers",
      "Ice Cream",
      "Bakery",
      "Fast Food",
    ],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "17843",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4800,
    },
    parentId: "1",
    avgRatingString: "4.1",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:59:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "50% OFF",
      subHeader: "UPTO ₹100",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "10323",
    name: "Subway",
    cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
    locality: "Fun City Mall",
    areaName: "Prashant Vihar",
    costForTwo: "₹350 for two",
    cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
    avgRating: 3.9,
    feeDetails: {
      restaurantId: "10323",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4800,
    },
    parentId: "2",
    avgRatingString: "3.9",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 35,
      lastMileTravel: 4.7,
      serviceability: "SERVICEABLE",
      slaString: "35 mins",
      lastMileTravelString: "4.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "275376",
    name: "Delhi Cart & Bakers By Radisson Blu",
    cloudinaryImageId: "wcemnobkslbyyffkx8ri",
    locality: "Paschim Vihar",
    areaName: "Paschim Vihar",
    costForTwo: "₹1000 for two",
    cuisines: ["Indian", "Desserts", "Asian"],
    avgRating: 4,
    feeDetails: {
      restaurantId: "275376",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4800,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4800,
    },
    parentId: "13532",
    avgRatingString: "4.0",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 40,
      lastMileTravel: 4.8,
      serviceability: "SERVICEABLE",
      slaString: "40 mins",
      lastMileTravelString: "4.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "newg.png",
          description: "Gourmet",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Gourmet",
                imageId: "newg.png",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "93959",
    name: "The Burger Club",
    cloudinaryImageId: "niwdjtisvbvctdu1lpvh",
    locality: "Rani Bagh",
    areaName: "Pitampura",
    costForTwo: "₹250 for two",
    cuisines: ["American", "Beverages", "Desserts"],
    avgRating: 4.2,
    feeDetails: {
      restaurantId: "93959",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 5400,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 5400,
    },
    parentId: "2285",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 27,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      slaString: "27 mins",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 04:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "23572",
    name: "Baljeet's Amritsari Koolcha",
    cloudinaryImageId: "e458a26a0909a02111fb00c896c50ab1",
    locality: "BG8th Block",
    areaName: "Paschim Vihar",
    costForTwo: "₹350 for two",
    cuisines: ["North Indian", "Snacks", "Desserts", "Indian"],
    avgRating: 4.2,
    veg: true,
    feeDetails: {
      restaurantId: "23572",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 5400,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 5400,
    },
    parentId: "2689",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 5.9,
      serviceability: "SERVICEABLE",
      slaString: "32 mins",
      lastMileTravelString: "5.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 22:40:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "355895",
    name: "Chaayos Chai+Snacks=Relax",
    cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
    locality: "ARSS Mall",
    areaName: "Paschim Vihar",
    costForTwo: "₹250 for two",
    cuisines: [
      "Bakery",
      "Beverages",
      "Chaat",
      "Desserts",
      "Fast Food",
      "Home Food",
      "Italian",
      "Maharashtrian",
      "Snacks",
      "Street Food",
      "Sweets",
    ],
    avgRating: 4.3,
    feeDetails: {
      restaurantId: "355895",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 5400,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 5400,
    },
    parentId: "281782",
    avgRatingString: "4.3",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 5.5,
      serviceability: "SERVICEABLE",
      slaString: "32 mins",
      lastMileTravelString: "5.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 23:00:00",
      opened: true,
    },
    badges: {
      textExtendedBadges: [
        {
          iconId: "guiltfree/GF_Logo_android_3x",
          shortDescription: "options available",
          fontColor: "#7E808C",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {
          badgeObject: [
            {
              attributes: {
                description: "",
                fontColor: "#7E808C",
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
              },
            },
          ],
        },
      },
    },
    aggregatedDiscountInfoV3: {
      header: "60% OFF",
      subHeader: "UPTO ₹120",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "546073",
    name: "Vadilal Ice Creams",
    cloudinaryImageId: "jl3dgzqss2b0pfc6rpaa",
    locality: "Rithala",
    areaName: "Rohini",
    costForTwo: "₹200 for two",
    cuisines: ["Ice Cream", "Desserts"],
    avgRating: 4.4,
    veg: true,
    feeDetails: {
      restaurantId: "546073",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 5400,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 5400,
    },
    parentId: "11745",
    avgRatingString: "4.4",
    totalRatingsString: "100+",
    sla: {
      deliveryTime: 24,
      lastMileTravel: 5.6,
      serviceability: "SERVICEABLE",
      slaString: "24 mins",
      lastMileTravelString: "5.6 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 02:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "36279",
    name: "Bille Di hatti (Pitampura) ",
    cloudinaryImageId: "xovqdwufznyil35jg602",
    locality: "RP Block",
    areaName: "Pitampura",
    costForTwo: "₹100 for two",
    cuisines: ["Street Food", "Snacks", "North Indian"],
    avgRating: 4,
    veg: true,
    feeDetails: {
      restaurantId: "36279",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 6000,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 6000,
    },
    parentId: "4639",
    avgRatingString: "4.0",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 6.3,
      serviceability: "SERVICEABLE",
      slaString: "30 mins",
      lastMileTravelString: "6.3 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 19:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹125 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "252457",
    name: "Dunkin' - Donuts & Coffee",
    cloudinaryImageId: "czmlk9r09mqs88qpbppn",
    locality: "Netaji Subhash Place",
    areaName: "Pitampura",
    costForTwo: "₹250 for two",
    cuisines: ["Desserts", "Cafe", "Bakery", "Beverages", "Fast Food"],
    avgRating: 4.4,
    feeDetails: {
      restaurantId: "252457",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 6000,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 6000,
    },
    parentId: "2276",
    avgRatingString: "4.4",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 26,
      lastMileTravel: 6.5,
      serviceability: "SERVICEABLE",
      slaString: "26 mins",
      lastMileTravelString: "6.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-07 02:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  {
    id: "61706",
    name: "Barista Coffee",
    cloudinaryImageId: "02731f6bd73f982bc74a522edd9c1b01",
    locality: "Netaji Subhash Place",
    areaName: "Netaji Subhash Place",
    costForTwo: "₹350 for two",
    cuisines: ["Beverages", "Snacks", "Desserts"],
    avgRating: 3.9,
    feeDetails: {
      restaurantId: "61706",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 6000,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 6000,
    },
    parentId: "2359",
    avgRatingString: "3.9",
    totalRatingsString: "1K+",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 6.5,
      serviceability: "SERVICEABLE",
      slaString: "33 mins",
      lastMileTravelString: "6.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-09-06 22:30:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    aggregatedDiscountInfoV2: {},
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
        <h1 className="company-name">Tastopia</h1>
      </div>
      <div className="nav-items">
        <ul>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  // console.log(props); //Object
  const { resData } = props; // Destructuring
  const { name, avgRating, cuisines, costForTwo, sla: {deliveryTime}, areaName, cloudinaryImageId} = resData;
  return (
    <div className="restaurant-card">
      <img
        className="res-card-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
        alt="KFC"
      />
      <div className="res-name--rating">
        <h4 className="res-name">{name}</h4>
        <h4 className="res-rating">✭ {avgRating}</h4>
      </div>
      <div className="cuisines-location">
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="location">{areaName}</p>
      </div>
      <div className="price-deliveryTime">
        <h5 className="price">{costForTwo}</h5>
        <h5 className="delivery-time">{deliveryTime} MINS</h5>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <div className="main">
      <div className="searchBar"></div>
      <h2>Restaurants with online food delivery</h2>
      <div className="restaurant-container">
        {
          resList.map((restaurant) => (
            <RestaurantCard  key={restaurant.id} resData={restaurant}/>
          )
  )}
      </div>
    </div>
  );
};
const Footer = () => {
  return <div className="footer"></div>;
};
const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
