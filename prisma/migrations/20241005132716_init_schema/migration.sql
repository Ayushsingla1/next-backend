-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);
