import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1635177230750 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'compliments',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_sender',
                        type: 'uuid'
                    },
                    {
                        name: 'user_receiver',
                        type: 'uuid'
                    },
                    {
                        name: 'tag_id',
                        type: 'uuid'
                    },
                    {
                        name: 'message',
                        type: ' varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ], foreignKeys: [
                    {
                        name: 'FKusers_sender_compliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_sender'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKusers_receiver_compliments',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_receiver'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKtags_compliments',
                        referencedTableName: 'tags',
                        referencedColumnNames: ['id'],
                        columnNames: ['tag_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    /** USAR A CRIAÇÃO DE FOREIGN KEY QUANDO A NOVA TABELA NAO FOR DEPENDENTE DA TABELA AOS QUAIS OS DADOS FORAM IMPORTADOS.
        await queryRunner.createForeignKey(
        'compliments',
        new TableForeignKey({
            name: 'FKusercompliments',
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            columnNames: ['user_sender'],
            onDelete: 'SET NULL',
            onUpdate: 'SET NULL'

        })
        )*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('compliments');
    }

}
