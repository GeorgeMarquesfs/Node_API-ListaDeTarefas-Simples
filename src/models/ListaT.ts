import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/pg';

export interface ListaInstance extends Model {
    id: number, 
    title: string,
    done: boolean;
}

export const Lista = sequelize.define<ListaInstance>('ListaT', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
        tableName: 'listadetarefas',
        timestamps: false

});