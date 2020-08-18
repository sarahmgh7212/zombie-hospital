const hospitalDB =  [
    {
      id: 1,
      name: "St Vincent's Hospital",
      location: {
        lat: -33.88041,
        lng: 151.22096
     },
      waitingList:[{
        patientCount:2,
        painLevel:0,
        avgProcessTime:20
      },
      {
        patientCount:5,
        painLevel:1,
        avgProcessTime:33
      },
      {
        patientCount:1,
        painLevel:2,
        avgProcessTime:15
      },
      {
        patientCount:10,
        painLevel:3,
        avgProcessTime:39
      },
      {
        patientCount:2,
        painLevel:4,
        avgProcessTime:33
      }]
    },
    
    {
      "id": 2,
      "name": "Royal Prince Alfred Hospital",
      "waitingList": [
         {
            "patientCount": 0,
            "painLevel": 0,
            "avgProcessTime": 60
         },
         {
            "patientCount": 1,
            "painLevel": 1,
            "avgProcessTime": 15
         },
         {
            "patientCount": 2,
            "painLevel": 2,
            "avgProcessTime": 16
         },
         {
            "patientCount": 0,
            "painLevel": 3,
            "avgProcessTime": 87
         },
         {
            "patientCount": 1,
            "painLevel": 4,
            "avgProcessTime": 71
         }
      ],
      "location": {
         "lat": -33.889404,
         "lng": 151.18349
      }
   },
   {
      "id": 3,
      "name": "Royal North Shore Hospital",
      "waitingList": [
         {
            "patientCount": 4,
            "painLevel": 0,
            "avgProcessTime": 75
         },
         {
            "patientCount": 4,
            "painLevel": 1,
            "avgProcessTime": 25
         },
         {
            "patientCount": 4,
            "painLevel": 2,
            "avgProcessTime": 5
         },
         {
            "patientCount": 4,
            "painLevel": 3,
            "avgProcessTime": 60
         },
         {
            "patientCount": 14,
            "painLevel": 4,
            "avgProcessTime": 87
         }
      ],
      "location": {
         "lat": -33.82099,
         "lng": 151.19142
      }
   },
   {
      "id": 4,
      "name": "Sydney Children's Hospital",
      "waitingList": [
         {
            "patientCount": 2,
            "painLevel": 0,
            "avgProcessTime": 30
         },
         {
            "patientCount": 11,
            "painLevel": 1,
            "avgProcessTime": 29
         },
         {
            "patientCount": 10,
            "painLevel": 2,
            "avgProcessTime": 44
         },
         {
            "patientCount": 2,
            "painLevel": 3,
            "avgProcessTime": 16
         },
         {
            "patientCount": 11,
            "painLevel": 4,
            "avgProcessTime": 75
         }
      ],
      "location": {
         "lat": -33.917286,
         "lng": 151.23767
      }
   },
   {
      "id": 5,
      "name": "Prince of Wales Hospital",
      "waitingList": [
         {
            "patientCount": 0,
            "painLevel": 0,
            "avgProcessTime": 23
         },
         {
            "patientCount": 2,
            "painLevel": 1,
            "avgProcessTime": 20
         },
         {
            "patientCount": 2,
            "painLevel": 2,
            "avgProcessTime": 28
         },
         {
            "patientCount": 3,
            "painLevel": 3,
            "avgProcessTime": 25
         },
         {
            "patientCount": 21,
            "painLevel": 4,
            "avgProcessTime": 65
         }
      ],
      "location": {
         "lat": -33.91851,
         "lng": 151.23897
      }
   },
   {
      "id": 6,
      "name": "Ryde Hospital",
      "waitingList": [
         {
            "patientCount": 1,
            "painLevel": 0,
            "avgProcessTime": 40
         },
         {
            "patientCount": 1,
            "painLevel": 1,
            "avgProcessTime": 38
         },
         {
            "patientCount": 1,
            "painLevel": 2,
            "avgProcessTime": 50
         },
         {
            "patientCount": 4,
            "painLevel": 3,
            "avgProcessTime": 30
         },
         {
            "patientCount": 4,
            "painLevel": 4,
            "avgProcessTime": 29
         }
      ],
      "location": {
         "lat": -33.796272,
         "lng": 151.0897
      }
   },
   {
      "id": 7,
      "name": "Concord Repatriation General Hospital",
      "waitingList": [
         {
            "patientCount": 5,
            "painLevel": 0,
            "avgProcessTime": 42
         },
         {
            "patientCount": 1,
            "painLevel": 1,
            "avgProcessTime": 16
         },
         {
            "patientCount": 2,
            "painLevel": 2,
            "avgProcessTime": 80
         },
         {
            "patientCount": 5,
            "painLevel": 3,
            "avgProcessTime": 44
         },
         {
            "patientCount": 4,
            "painLevel": 4,
            "avgProcessTime": 23
         }
      ],
      "location": {
         "lat": -33.835133,
         "lng": 151.09665
      }
   },
   {
      "id": 8,
      "name": "St George Hospital",
      "waitingList": [
         {
            "patientCount": 5,
            "painLevel": 0,
            "avgProcessTime": 11
         },
         {
            "patientCount": 5,
            "painLevel": 1,
            "avgProcessTime": 42
         },
         {
            "patientCount": 5,
            "painLevel": 2,
            "avgProcessTime": 37
         },
         {
            "patientCount": 15,
            "painLevel": 3,
            "avgProcessTime": 39
         },
         {
            "patientCount": 5,
            "painLevel": 4,
            "avgProcessTime": 68
         }
      ],
      "location": {
         "lat": -33.965492,
         "lng": 151.13403
      }
   },
   {
      "id": 9,
      "name": "Northern Beaches Hospital",
      "waitingList": [
         {
            "patientCount": 10,
            "painLevel": 0,
            "avgProcessTime": 21
         },
         {
            "patientCount": 10,
            "painLevel": 1,
            "avgProcessTime": 41
         },
         {
            "patientCount": 21,
            "painLevel": 2,
            "avgProcessTime": 39
         },
         {
            "patientCount": 10,
            "painLevel": 3,
            "avgProcessTime": 40
         },
         {
            "patientCount": 10,
            "painLevel": 4,
            "avgProcessTime": 38
         }
      ],
      "location": {
         "lat": -33.7504,
         "lng": 151.2326
      }
   },
   {
      "id": 10,
      "name": "Auburn Hospital & Community Health Services",
      "waitingList": [
         {
            "patientCount": 1,
            "painLevel": 0,
            "avgProcessTime": 36
         },
         {
            "patientCount": 6,
            "painLevel": 1,
            "avgProcessTime": 20
         },
         {
            "patientCount": 3,
            "painLevel": 2,
            "avgProcessTime": 18
         },
         {
            "patientCount": 4,
            "painLevel": 3,
            "avgProcessTime": 50
         },
         {
            "patientCount": 6,
            "painLevel": 4,
            "avgProcessTime": 4
         }
      ],
      "location": {
         "lat": -33.8604,
         "lng": 151.03362
      }
   }
];






module.exports = hospitalDB;
