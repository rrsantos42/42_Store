-- CreateTable
CREATE TABLE "product_model" (
    "id" SERIAL NOT NULL,
    "Ref" TEXT NOT NULL,
    "Name" TEXT,
    "Image" TEXT,
    "Price" DECIMAL(65,30) NOT NULL,
    "Stock" INTEGER NOT NULL,
    "Campus" TEXT,
    "Size" TEXT NOT NULL,
    "Color" TEXT NOT NULL,
    "Sold" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "product_model_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_model_Ref_key" ON "product_model"("Ref");
