// Mocked Backend-for-Frontend (BFF)
export class MockedBFF {
  constructor() {

    this.bffData = [
      {
        category: "Web Development",
        title: "HTML basics",
        description: "HTML (HyperText Markup Language) is the code that is used to structure a web page and its content. This guide provides a basic understanding of HTML and its functions.",
        optimizedPrompt: "How to use HTML for web page creation",
        result: "Successfully created a webpage using HTML",
        resultHistory: [
          {
            request: "How can I use HTML to create a web page?",
            response: "HTML is a markup language used to create web pages. It uses tags to create elements like headings, paragraphs, links, and images. Here's a simple HTML page structure:\n\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n</body>\n</html>"
          }
        ],
        tags: [
          "HTML",
          "Web Development"
        ]
      },
      {
        category: "Database Management",
        title: "SQL Introduction",
        description: "SQL (Structured Query Language) is a programming language used by nearly all relational databases for querying and managing data. This guide provides an overview of SQL basics.",
        optimizedPrompt: "Basic SQL queries for data management",
        result: "Successfully executed SQL queries",
        resultHistory: [
          {
            request: "How can I use SQL to query data?",
            response: "SQL is used to communicate with databases and includes commands like SELECT, INSERT, UPDATE, DELETE, and CREATE. Here's how you can use them:\n\n1. SELECT: This command is used to select data from a database. The data returned is stored in a result table, called the result-set.\n\nSELECT column1, column2, ...\nFROM table_name;\n\n2. INSERT INTO: This statement is used to insert new data into a table.\n\nINSERT INTO table_name (column1, column2, column3, ...)\nVALUES (value1, value2, value3, ...);\n\n3. UPDATE: This command is used to modify the existing records in a table.\n\nUPDATE table_name\nSET column1 = value1, column2 = value2, ...\nWHERE condition;\n\n4. DELETE: This command is used to delete existing records in a table.\n\nDELETE FROM table_name WHERE condition;\n\n5. CREATE DATABASE: This command is used to create a new database.\n\nCREATE DATABASE databasename;"
          }
        ],
        tags: [
          "SQL",
          "Database Management"
        ]
      },
      {
        category: "Software Development",
        title: "Python Programming Basics",
        description: "Python is a popular high-level, open-source programming language that is known for its simplicity and readability. This guide gives an introduction to Python programming basics.",
        optimizedPrompt: "How to program in Python",
        result: "Successfully programmed in Python",
        resultHistory: [
          {
            request: "How can I use Python to write a simple program?",
            response: "Python is an easy-to-learn language that uses a syntax which is quite simple and clean. Here's an example of a simple Python program:\n\nprint('Hello, World!')\n\nThis program will output the text 'Hello, World!' when it is run."
          }
        ],
        tags: [
          "Python",
          "Software Development"
        ]
      },
      {
        category: "Data Science",
        title: "Pandas Library Introduction",
        description: "Pandas is an open-source data manipulation and analysis library for Python. This guide provides an overview of the main features of Pandas.",
        optimizedPrompt: "Basic operations in Pandas library",
        result: "Successfully performed operations using Pandas",
        tags: [
          "Python",
          "Pandas",
          "Data Science"
        ]
      },
      {
        category: "Cyber Security",
        title: "Introduction to Ethical Hacking",
        description: "Ethical hacking involves legally breaking into computers and devices to test an organization's defenses. This guide gives an introduction to ethical hacking.",
        optimizedPrompt: "Basics of Ethical Hacking",
        result: "Successfully understood the basics of Ethical Hacking",
        tags: [
          "Cyber Security",
          "Ethical Hacking"
        ]
      },
      {
        category: "Cyber Security",
        title: "Introduction to Ethical Hacking",
        description: "Ethical hacking involves legally breaking into computers and devices to test an organization's defenses. This guide gives an introduction to ethical hacking.",
        optimizedPrompt: "Basics of Ethical Hacking",
        result: "Successfully understood the basics of Ethical Hacking",
        tags: [
          "Cyber Security",
          "Ethical Hacking"
        ]
      },
      {
        category: "Data Science",
        title: "Pandas Library Introduction",
        description: "Pandas is an open-source data manipulation and analysis library for Python. This guide provides an overview of the main features of Pandas.",
        optimizedPrompt: "Basic operations in Pandas library",
        result: "Successfully performed operations using Pandas",
        tags: [
          "Python",
          "Pandas",
          "Data Science"
        ]
      },
      {
        category: "Web Development",
        title: "JavaScript Frameworks",
        description: "JavaScript frameworks are an essential part of modern web development. They offer a structure for the JavaScript code. This guide gives an overview of the popular JavaScript frameworks.",
        optimizedPrompt: "Understanding JavaScript Frameworks",
        result: "Successfully understood the basics of JavaScript Frameworks",
        tags: [
          "JavaScript",
          "Web Development",
          "JavaScript Frameworks"
        ]
      },
      {
        category: "Data Science",
        title: "Pandas Library Introduction",
        description: "Pandas is an open-source data manipulation and analysis library for Python. This guide provides an overview of the main features of Pandas.",
        optimizedPrompt: "Basic operations in Pandas library",
        result: "Successfully performed operations using Pandas",
        tags: [
          "Python",
          "Pandas",
          "Data Science"
        ]
      },
      {
        category: "Data Science",
        title: "Pandas Library Introduction",
        description: "Pandas is an open-source data manipulation and analysis library for Python. This guide provides an overview of the main features of Pandas.",
        optimizedPrompt: "Basic operations in Pandas library",
        result: "Successfully performed operations using Pandas",
        tags: [
          "Python",
          "Pandas",
          "Data Science"
        ]
      },
      {
        category: "Cloud Computing",
        title: "Introduction to AWS",
        description: "Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon. This guide provides an overview of AWS services.",
        optimizedPrompt: "Understanding Amazon Web Services",
        result: "Successfully understood the basics of AWS",
        resultHistory: [
          {
            request: "What is AWS and what are some of its services?",
            response: "AWS stands for Amazon Web Services, which is a platform by Amazon that offers reliable, scalable, and inexpensive cloud computing services. Some of its widely used services are: Amazon S3 (for storage), Amazon EC2 (for scalable virtual servers), Amazon RDS (for relational databases), and AWS Lambda (for running serverless applications)."
          },
          {
            request: "How can I start using AWS?",
            response: "To start using AWS, you need to create an AWS account, set up your root user credentials, and secure your account. After that, you can start exploring the different services provided by AWS."
          }
        ],
        tags: [
          "Cloud Computing",
          "AWS"
        ]
      },
      {
        category: "Data Science",
        title: "Understanding Machine Learning",
        description: "Machine Learning is a method of data analysis that automates analytical model building. This guide provides an overview of Machine Learning.",
        optimizedPrompt: "Basics of Machine Learning",
        result: "Successfully understood the basics of Machine Learning",
        resultHistory: [
          {
            request: "What is Machine Learning and how does it work?",
            response: "Machine Learning is a subset of artificial intelligence where the computer is trained to learn from data without being explicitly programmed. It works by finding patterns in the data and making predictions or decisions without being specifically programmed to do so."
          },
          {
            request: "What are the types of Machine Learning?",
            response: "The three main types of Machine Learning are Supervised Learning (where the model learns from labeled data), Unsupervised Learning (where the model learns from unlabeled data), and Reinforcement Learning (where an agent learns to behave in an environment by performing actions and seeing the results)."
          }
        ],
        tags: [
          "Data Science",
          "Machine Learning"
        ]
      },
      {
        category: "Software Development",
        title: "Version Control with Git",
        description: "Git is a distributed version control system for tracking changes in source code during software development. This guide provides an introduction to Git basics.",
        optimizedPrompt: "Understanding Git for version control",
        result: "Successfully understood the basics of Git",
        resultHistory: [
          {
            request: "What is Git and why is it useful?",
            response: "Git is a version control system that helps keep track of changes made to files and directories. It's useful because it allows you to revert back to any version of your work, compare changes over time, and collaborate with other developers in an organized manner."
          },
          {
            request: "How can I start using Git?",
            response: "To start using Git, you need to install it on your computer, set up your user name and email, and initialize a new Git repository using the 'git init' command. After that, you can start tracking changes with 'git add' and 'git commit'."
          }
        ],
        tags: [
          "Software Development",
          "Git"
        ]
      },






      // From here onwards, are the additional data objects

      ...Array.from({ length: 59 }, (v, i) => ({
        category: `Category ${i + 2}`,
        title: `Title ${i + 2}`,
        description: `Description ${i + 2}`,
        optimizedPrompt: `OptimizedPrompt ${i + 2}`,
        result: `Result ${i + 2}`,
        resultHistory: [
          {
            request: `Request ${i + 2}.1`,
            response: `Response ${i + 2}.1`
          },
          {
            request: `Request ${i + 2}.2`,
            response: `Response ${i + 2}.2`
          }
        ],
        tags: []
      }))
    ];

  }


  getData() {
    return this.bffData;
  }

  getTileData() {
    // Here we are returning a map of the bffData to the simplified data structure.
    // Adjust this transformation as necessary for your use case.
    return this.bffData.map((item) => ({
      title: item.title,
      category: item.category,
      description: item.description
    }));
  }
}

