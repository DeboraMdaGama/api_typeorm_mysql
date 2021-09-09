import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateUser1631188780887 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "user",
              columns: [
                {
                  name: "id",
                  type:"int",
                  isPrimary: true,
                },
                {
                  name: "firstName",
                  type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "int",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user");
    }

}
