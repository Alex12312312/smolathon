-- CreateTable
CREATE TABLE "invites" (
    "sender_id" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invites_pkey" PRIMARY KEY ("sender_id","receiver_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invites_receiver_id_key" ON "invites"("receiver_id");

-- CreateIndex
CREATE UNIQUE INDEX "invites_sender_id_receiver_id_key" ON "invites"("sender_id", "receiver_id");

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
