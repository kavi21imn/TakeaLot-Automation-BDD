$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("takealot.feature");
formatter.feature({
  "line": 1,
  "name": "shopclues Functional Test",
  "description": "I want to add product to cart",
  "id": "shopclues-functional-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to \"https://www.takealot.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.takealot.com",
      "offset": 23
    }
  ],
  "location": "TakealotSteps.i_want_to_navigate_to(String)"
});
formatter.result({
  "duration": 10252351900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Register a user",
  "description": "",
  "id": "shopclues-functional-test;register-a-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I filled user data to registration",
  "rows": [
    {
      "cells": [
        "kavi",
        "Kal",
        "test_20l34@gmail.com",
        "admin@123",
        "07440454768"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify user is registered",
  "keyword": "Then "
});
formatter.match({
  "location": "TakealotSteps.i_navigate_to_option()"
});
formatter.result({
  "duration": 4083589700,
  "status": "passed"
});
formatter.match({
  "location": "TakealotSteps.i_filled_user_data_to_registration(String\u003e)"
});
formatter.result({
  "duration": 1483153100,
  "status": "passed"
});
formatter.match({
  "location": "TakealotSteps.clicked_on_product()"
});
formatter.result({
  "duration": 37412400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I want to navigate to \"https://www.takealot.com\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.takealot.com",
      "offset": 23
    }
  ],
  "location": "TakealotSteps.i_want_to_navigate_to(String)"
});
formatter.result({
  "duration": 9468437600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search a product",
  "description": "",
  "id": "shopclues-functional-test;search-a-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I want to search for \"watches\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I want to select brand \"Garmin\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I add watches in my cart",
  "rows": [
    {
      "cells": [
        "Garmin Forerunner 45S Sports Watch Black"
      ],
      "line": 17
    },
    {
      "cells": [
        "Garmin QuickFit 22mm Silicone Watch Band - Amp Yellow"
      ],
      "line": 18
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "Verify given products added to my cart",
  "rows": [
    {
      "cells": [
        "Garmin Forerunner 45S Sports Watch Black"
      ],
      "line": 20
    },
    {
      "cells": [
        "Garmin QuickFit 22mm Silicone Watch Band - Amp Yellow"
      ],
      "line": 21
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "watches",
      "offset": 22
    }
  ],
  "location": "TakealotSteps.i_want_to_search_for(String)"
});
formatter.result({
  "duration": 3773155900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Garmin",
      "offset": 24
    }
  ],
  "location": "TakealotSteps.i_want_to_select_brand(String)"
});
formatter.result({
  "duration": 7945875500,
  "status": "passed"
});
formatter.match({
  "location": "TakealotSteps.i_add_watches_in_my_cart(String\u003e)"
});
formatter.result({
  "duration": 4357641400,
  "status": "passed"
});
formatter.match({
  "location": "TakealotSteps.verify_given_products_added_to_my_cart(String\u003e)"
});
formatter.result({
  "duration": 6503656300,
  "status": "passed"
});
});