import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationUserAndAdvertisement1681757106834 implements MigrationInterface {
    name = 'AddRelationUserAndAdvertisement1681757106834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "advertisements" ADD CONSTRAINT "FK_5b3a17dd0adeba4fbb27d977304" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "advertisements" DROP CONSTRAINT "FK_5b3a17dd0adeba4fbb27d977304"`);
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "advertisements" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "userId"`);
    }

}
