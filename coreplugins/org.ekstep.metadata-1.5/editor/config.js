window.formConfigurations = {
  "templateName": "defaultTemplate",
  "action": "save",
  "fields": [{
    "code": "namee",
    "dataType": "text",
    "description": "Title of the content",
    "editable": true,
    "inputType": "text",
    "label": "Titlee",
    "name": "Title",
    "placeholder": "Enter the Title ",
    "renderingHints": {},
    "required": false,
    "visible": true
  },
  {
    "code": "contentType",
    "visible": true,
    "editable": true,
    "dataType": "text",
    "index": 1,
    "range": [{
        "name": "Lesson Plan",
        "value": "LessonPlan"
      },
      {
        "name": "Explanation Resource",
        "value": "ExplanationResource"
      },
      {
        "name": "Learning Outcome Definition",
        "value": "LearningOutcomeDefinition"
      },
      {
        "name": "Practice Resource",
        "value": "PracticeResource"
      }
    ],
    "label": "Content Type",
    "required": "true",
    "name": "contentType",
    "description": "Choose content",
    "inputType": "select",
    "placeholder": "Select Content Type",
    "renderingHints": {
      "semanticColumnWidth": "six"
    }
  },
   
    {
      "code": "description",
      "dataType": "text",
      "description": "Brief description",
      "editable": true,
      "inputType": "textarea",
      "label": "Description",
      "name": "Description",
      "placeholder": "Description",
      "renderingHints": {},
      "required": false,
      "visible": true
    },
    {
      "code": "keywords",
      "dataType": "list",
      "description": "Keywords for the content",
      "editable": true,
      "inputType": "keywordsuggestion",
      "label": "keywords",
      "name": "Keywords",
      "placeholder": "Enter Keywords",
      "required": false,
      "visible": true
    },
    {
      "code": "appicon",
      "dataType": "url",
      "description": "App Icon",
      "editable": true,
      "index": 6,
      "inputType": "file",
      "label": "App Icon",
      "name": "App Icon",
      "placeholder": "App Icon",
      "renderingHints": {},
      "required": false,
      "visible": true
    },

    {
      "code": "board",
      "dataType": "text",
      "depends": [
        "gradeLevel"
      ],
      "description": "Curriculum",
      "editable": true,
      "index": 0,
      "inputType": "select",
      "label": "Curriculum",
      "name": "Curriculum",
      "placeholder": "Select Curriculum",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "subject",
      "dataType": "text",
      "description": "",
      "editable": true,
      "index": 2,
      "inputType": "select",
      "label": "Subject",
      "name": "Subject",
      "placeholder": "Select Subject",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "medium",
      "dataType": "text",
      "description": "",
      "editable": true,
      "index": 3,
      "inputType": "select",
      "label": "medium",
      "name": "medium",
      "placeholder": "Curriculum",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "gradeLevel",
      "dataType": "list",
      "depends": [
        "subject"
      ],
      "description": "Class",
      "editable": true,
      "index": 1,
      "inputType": "multiselect",
      "label": "Class",
      "name": "Class",
      "placeholder": "Select Class",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "year",
      "dataType": "text",
      "description": "",
      "editable": true,
      "index": 4,
      "inputType": "select",
      "label": "Year",
      "name": "Year",
      "placeholder": "Select Year",
      "renderingHints": {},
      "required": false,
      "visible": true
    },
    {
      "code": "license",
      "dataType": "text",
      "description": "License of the content",
      "editable": true,
      "index": 3,
      "inputType": "licenses",
      "label": "license",
      "name": "license",
      "placeholder": "license",
      "renderingHints": {},
      "required": true,
      "visible": true
    },
    {
      "code": "publisher",
      "dataType": "text",
      "description": "Publication",
      "editable": true,
      "index": 5,
      "inputType": "text",
      "label": "Publisher",
      "name": "Publisher",
      "placeholder": "Publication",
      "renderingHints": {},
      "required": false,
      "visible": true
    },
    {
      "code": "phone",
      "dataType": "text",
      "description": "Publication",
      "editable": true,
      "index": 5,
      "inputType": "number",
      "label": "Phone",
      "name": "Publisher",
      "placeholder": "Contact number",
      "renderingHints": {},
      "required": false,
      "visible": true
    },
    {
      "code": "topic",
      "dataType": "list",
      "description": "Choose a topic",
      "editable": true,
      "inputType": "topicselector",
      "label": "Topics",
      "name": "Topics",
      "placeholder": "Choose Topics",
      "renderingHints": {},
      "required": false,
      "visible": true
    }
  ]
};
window.formConfigs = {
  filterMetaDataTemplate: {
    "action": "question-filter-view",
    "templateName": "filterMetaDataTemplate",
    "fields": [
      {
        "code": "searchText",
        "dataType": "text",
        "description": " by question title",
        "editable": true,
        "inputType": "text",
        "label": "Search",
        "name": "Search",
        "index": 0,
        "placeholder": "Search by question title",
        "renderingHints": {},
        "required": false,
        "visible": true
      },
      {
        "code": "medium",
        "dataType": "text",
        "description": "",
        "editable": true,
        "index": 1,
        "inputType": "select",
        "label": "Language",
        "name": "medium",
        "placeholder": "Select Language",
        "renderingHints": {},
        "required": false,
        "visible": true
      },
      {
        "code": "level",
        "dataType": "text",
        "description": "Add Notes",
        "editable": true,
        "index": 2,
        "inputType": "select",
        "label": "Difficulty",
        "name": "level",
        "placeholder": "Select Level",
        "range": [
          "EASY",
          "MEDIUM",
          "DIFFICULT"
        ],
        "renderingHints": {},
        "required": false,
        "visible": true
      },
      {
        "code": "questionType",
        "dataType": "list",
        "description": "Class",
        "editable": true,
        "index": 3,
        "inputType": "multiselect",
        "label": "Question Type",
        "name": "Question Type",
        "placeholder": "Question Type",
        "range": [
          "Multiple Choice Questions",
          "Fill in the Blanks",
          "Match the Following"
        ],
        "renderingHints": {},
        "required": false,
        "visible": true
      },
      {
        "code": "gradeLevel",
        "dataType": "list",
        "description": "Class",
        "editable": true,
        "index": 4,
        "inputType": "multiselect",
        "label": "Grade Level",
        "name": "Class",
        "placeholder": "Select Class",
        "renderingHints": {},
        "required": false,
        "visible": true
      },
      {
        "code": "concepts",
        "dataType": "list",
        "description": "Choose a concept",
        "editable": true,
        "inputType": "conceptselector",
        "label": "Concepts",
        "name": "Concepts",
        "placeholder": "Choose Concepts",
        "renderingHints": {},
        "required": false,
        "visible": true,
        "index": 5
      },
      {
        "code": "myQuestions",
        "dataType": "toggle",
        "description": "My Questions",
        "editable": true,
        "inputType": "checkbox",
        "label": "My Questions",
        "name": "My Questions",
        "placeholder": "My Questions",
        "renderingHints": {},
        "required": false,
        "visible": true,
        "index": 6
      }
    ]
  },
  questionMetaDataTemplate: {
    "action": "question-meta-save",
    "templateName": "questionMetaDataTemplate",
    "fields": [
      {
        "code": "name",
        "dataType": "text",
        "description": "Title of the question",
        "editable": true,
        "inputType": "text",
        "label": "Title",
        "name": "Title",
        "index": 0,
        "placeholder": "Enter the Title",
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "medium",
        "dataType": "text",
        "description": "",
        "editable": true,
        "index": 1,
        "inputType": "select",
        "label": "Medium",
        "name": "medium",
        "placeholder": "Select Medium",
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "level",
        "dataType": "text",
        "description": "Add Notes",
        "editable": true,
        "index": 2,
        "inputType": "select",
        "label": "Level",
        "name": "level",
        "placeholder": "Select Level",
        "range": [
          "EASY",
          "MEDIUM",
          "DIFFICULT"
        ],
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "gradeLevel",
        "dataType": "list",
        "description": "Class",
        "editable": true,
        "index": 3,
        "inputType": "multiselect",
        "label": "Grade Level",
        "name": "Class",
        "placeholder": "Select Grade",
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "subject",
        "dataType": "text",
        "description": "Add subjects",
        "editable": true,
        "index": 4,
        "inputType": "select",
        "label": "Subject",
        "name": "subject",
        "placeholder": "Select Subject",
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "board",
        "dataType": "text",
        "description": "board",
        "editable": true,
        "index": 5,
        "inputType": "select",
        "label": "Board",
        "name": "Board",
        "placeholder": "Select Board",
        "renderingHints": {},
        "required": true,
        "visible": true
      },
      {
        "code": "max_score",
        "dataType": "text",
        "description": "",
        "editable": true,
        "index": 6,
        "inputType": "number",
        "label": "Max Score",
        "name": "max_score",
        "placeholder": "Enter the Max Score",
        "renderingHints": {},
        "required": true,
        "visible": true,
        "validation": [
          {
            "type": "min",
            "value": "1",
            "message": ""
          }
        ]
      },
      {
        "code": "concepts",
        "dataType": "list",
        "description": "Choose a concept",
        "editable": true,
        "inputType": "conceptselector",
        "label": "Concepts",
        "name": "Concepts",
        "placeholder": "Choose Concepts",
        "renderingHints": {},
        "required": true,
        "visible": true,
        "index": 7
      },
      {
        "code": "description",
        "dataType": "text",
        "description": "Brief description",
        "editable": true,
        "inputType": "textarea",
        "label": "Description",
        "name": "Description",
        "placeholder": "Enter the Description",
        "renderingHints": {},
        "required": false,
        "visible": true,
        "index": 8
      }/*,
      {
        "code": "topic",
        "dataType": "list",
        "description": "Choose a topics",
        "editable": true,
        "index": 9,
        "inputType": "topicselector",
        "label": "Topic",
        "name": "Topic",
        "placeholder": "Choose Topics",
        "renderingHints": {},
        "required": false,
        "visible": true
      }*/
    ]
  },
  filterLessonDataTemplate: {
    "action": "resource-filters",
    "templateName": "resourceFilterTemplate",
    "fields": [
        {
            "code": "contentType",
            "dataType": "list",
            "description": "Category",
            "editable": true,
            "index": 1,
            "inputType": "multiselect",
            "label": "contentType",
            "name": "contentType",
            "placeholder": "Select contentType",
            "renderingHints": {},
            "required": false,
            "range": [
              "Resource",
              "Collection",
              "Content"
            ],
            "visible": true
        },
        {
            "code": "board",
            "dataType": "text",
            "description": "Curriculum",
            "editable": true,
            "index": 2,
            "inputType": "select",
            "label": "Curriculum",
            "name": "Curriculum",
            "placeholder": "Select Curriculum",
            "renderingHints": {},
            "required": false,
            "visible": true
        },
        {
            "code": "gradeLevel",
            "dataType": "list",
            "description": "Class",
            "editable": true,
            "index": 3,
            "inputType": "multiselect",
            "label": "Class",
            "name": "Class",
            "placeholder": "Select Class",
            "renderingHints": {},
            "required": false,
            "visible": true
        },
        {
            "code": "subject",
            "dataType": "text",
            "description": "",
            "editable": true,
            "index": 4,
            "inputType": "select",
            "label": "Subject",
            "name": "Subject",
            "placeholder": "Select Subject",
            "renderingHints": {},
            "required": false,
            "visible": true
        },
        {
            "code": "medium",
            "dataType": "text",
            "description": "",
            "editable": true,
            "index": 5,
            "inputType": "select",
            "label": "Medium",
            "name": "medium",
            "placeholder": "Select Medium",
            "renderingHints": {},
            "required": false,
            "visible": true
        },
        {
            "code": "topic",
            "dataType": "list",
            "description": "Choose a Topics",
            "editable": true,
            "index": 6,
            "inputType": "topicselector",
            "label": "Topics",
            "name": "Topic",
            "placeholder": "Choose Topics",
            "renderingHints": {},
            "required": false,
            "visible": true
        }
    ]
  }
};