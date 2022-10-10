# NaologicProject
This project involves creating a project to evaluate a candidate's skills in the backend for Naologic.

## :clipboard: About the Application
The application is an E-commerce application. It has two entities: 
- Product: Holds information about a product and it's variants. Variants are subdocuments of the Product.
- Order: Holds information about an order and the products purchased through that order.

This application uses the following technologies: 
- Programming Language: **NodeJS & Typescript**
- Framework: **NestJS**
- Build System: **Nx.dev**
- Data Storage: **NoSQL with MongoDB**
- ORM: **TypeOrm**

## :rocket: Challenges
The following challenges are meant to see the candidates skills to:
- *Write clean code*
- *Assess and deal with complexity*
- *Reuse code*
- *Debug*

#### The challenges are as follows:
1. There is **a bug** in the process of adding products. The task is to **find it and fix it**.
2. **Writing the logic behind making an order**. The order contains products being sold and the quantities purchased. Make sure to **update the quantities of the variants and the total quantity of the product**, which is the total amount of its variants quantities.
3. **Every day at midnight**, there is a list of existing products and new products that gets submitted to the application via the `/product/bulk-update` endpoint. The task is to update every product and it's variants accordingly, **every 24 hours at 00:00 AM.**

## 🛠️ Starting the application

*You need to install all the mentioned technologies in your local computer.*

After that: 
1. Clone this repo by typing the following in your terminal: `https://github.com/enipod/NaologicProject.git`
2. Head into the Naologic directory by going into the project and typing: `cd Naologic`
3. Start the project by typing: `nx initialize candidate-test`

After these steps are completed, go ahead and *explore the code*, *create some products* by looking under the `dummy` directory for examples, and start doing the challenges. It is suggested that *the first challenge is solved first* - but you can go by any order to complete these challenge if you prefer. There is also the **Postman Collection** for all the endpoints of the application - so that you can start exploring the app immediately. 
