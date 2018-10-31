$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resource/Feature/FBlogin.Feature");
formatter.feature({
  "line": 1,
  "name": "Facebook login",
  "description": "",
  "id": "facebook-login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "\"\u003cTestname\u003e\"",
  "description": "",
  "id": "facebook-login;\"\u003ctestname\u003e\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@fblogin"
    },
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user at facebook homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will see a error message \"\u003cerrormsg\u003e\" \"\u003cactualerrorlocator\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "facebook-login;\"\u003ctestname\u003e\";",
  "rows": [
    {
      "cells": [
        "Testname",
        "username",
        "password",
        "errormsg",
        "actualerrorlocator"
      ],
      "line": 14,
      "id": "facebook-login;\"\u003ctestname\u003e\";;1"
    },
    {
      "cells": [
        "Invalid username \u0026 invalid password",
        "syfulislam@ymail",
        "123456",
        "The email or phone number you’ve entered doesn’t match any account. Sign up for an account.",
        "actualerrormessage"
      ],
      "line": 15,
      "id": "facebook-login;\"\u003ctestname\u003e\";;2"
    },
    {
      "cells": [
        "Valid username \u0026 valid password",
        "harrypotter@gmail.com",
        "123456789",
        "The password you’ve entered is incorrect. Forgot Password?",
        "actualerrormessage"
      ],
      "line": 16,
      "id": "facebook-login;\"\u003ctestname\u003e\";;3"
    },
    {
      "cells": [
        "Empty username \u0026 valid password",
        "",
        "12345789",
        "The email or phone number you’ve entered doesn’t match any account. Sign up for an account.",
        "actualerrormessage"
      ],
      "line": 17,
      "id": "facebook-login;\"\u003ctestname\u003e\";;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6807235000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "\"Invalid username \u0026 invalid password\"",
  "description": "",
  "id": "facebook-login;\"\u003ctestname\u003e\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@fblogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user at facebook homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter username \"syfulislam@ymail\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"123456\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will see a error message \"The email or phone number you’ve entered doesn’t match any account. Sign up for an account.\" \"actualerrormessage\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinition.firststep()"
});
formatter.result({
  "duration": 731899800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "syfulislam@ymail",
      "offset": 21
    }
  ],
  "location": "GUIStepDefinition.secondstep(String)"
});
formatter.result({
  "duration": 166877400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "GUIStepDefinition.thirdstep(String)"
});
formatter.result({
  "duration": 89168700,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.fourthstep()"
});
formatter.result({
  "duration": 3093509700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email or phone number you’ve entered doesn’t match any account. Sign up for an account.",
      "offset": 31
    },
    {
      "val": "actualerrormessage",
      "offset": 125
    }
  ],
  "location": "GUIStepDefinition.errormessage(String,String)"
});
formatter.result({
  "duration": 434826100,
  "status": "passed"
});
formatter.after({
  "duration": 2387979100,
  "status": "passed"
});
formatter.before({
  "duration": 4935328500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "\"Valid username \u0026 valid password\"",
  "description": "",
  "id": "facebook-login;\"\u003ctestname\u003e\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@fblogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user at facebook homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter username \"harrypotter@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"123456789\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will see a error message \"The password you’ve entered is incorrect. Forgot Password?\" \"actualerrormessage\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinition.firststep()"
});
formatter.result({
  "duration": 559680400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harrypotter@gmail.com",
      "offset": 21
    }
  ],
  "location": "GUIStepDefinition.secondstep(String)"
});
formatter.result({
  "duration": 186516400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456789",
      "offset": 22
    }
  ],
  "location": "GUIStepDefinition.thirdstep(String)"
});
formatter.result({
  "duration": 100184800,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.fourthstep()"
});
formatter.result({
  "duration": 11761155500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password you’ve entered is incorrect. Forgot Password?",
      "offset": 31
    },
    {
      "val": "actualerrormessage",
      "offset": 92
    }
  ],
  "location": "GUIStepDefinition.errormessage(String,String)"
});
formatter.result({
  "duration": 380628600,
  "status": "passed"
});
formatter.after({
  "duration": 2149765400,
  "status": "passed"
});
formatter.before({
  "duration": 4715056300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "\"Empty username \u0026 valid password\"",
  "description": "",
  "id": "facebook-login;\"\u003ctestname\u003e\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    },
    {
      "line": 3,
      "name": "@regression"
    },
    {
      "line": 3,
      "name": "@fblogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user at facebook homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter username \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters password \"12345789\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user will see a error message \"The email or phone number you’ve entered doesn’t match any account. Sign up for an account.\" \"actualerrormessage\"",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GUIStepDefinition.firststep()"
});
formatter.result({
  "duration": 594798500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "GUIStepDefinition.secondstep(String)"
});
formatter.result({
  "duration": 56003900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345789",
      "offset": 22
    }
  ],
  "location": "GUIStepDefinition.thirdstep(String)"
});
formatter.result({
  "duration": 109933700,
  "status": "passed"
});
formatter.match({
  "location": "GUIStepDefinition.fourthstep()"
});
formatter.result({
  "duration": 2818433300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The email or phone number you’ve entered doesn’t match any account. Sign up for an account.",
      "offset": 31
    },
    {
      "val": "actualerrormessage",
      "offset": 125
    }
  ],
  "location": "GUIStepDefinition.errormessage(String,String)"
});
formatter.result({
  "duration": 374343900,
  "status": "passed"
});
formatter.after({
  "duration": 2142052600,
  "status": "passed"
});
});