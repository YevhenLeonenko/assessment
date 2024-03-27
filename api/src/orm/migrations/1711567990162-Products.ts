import { MigrationInterface, QueryRunner } from "typeorm";

export class Products1711567990162 implements MigrationInterface {
    name = 'Products1711567990162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "manufacturers" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_138520de32c379a48e703441975" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "price" numeric(10,2) NOT NULL, "title" character varying NOT NULL, "description" character varying, "image" character varying, "manufacturerId" integer, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_19c34064fd37743758cff5b403e" FOREIGN KEY ("manufacturerId") REFERENCES "manufacturers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_19c34064fd37743758cff5b403e"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "manufacturers"`);
    }

}
