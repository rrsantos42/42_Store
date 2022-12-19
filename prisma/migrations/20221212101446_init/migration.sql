/*
  Warnings:

  - A unique constraint covering the columns `[Ref]` on the table `product_model` will be added. If there are existing duplicate values, this will fail.
  - Made the column `createdAt` on table `product_model` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updatedAt` on table `product_model` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "product_model" ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "updatedAt" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "product_model_Ref_key" ON "product_model"("Ref");
