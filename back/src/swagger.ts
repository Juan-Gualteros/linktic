import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import express from "express";
import { Express } from "express-serve-static-core";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LinkTic",
      version: "1.0.0",
      description: "API documentation with Swagger",
    },
  },
  apis: ["./src/routes/*.ts", "./src/models/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: Express, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `Swagger docs are available at http://localhost:${port}/api-docs`
  );
};

module.exports = { swaggerDocs };
