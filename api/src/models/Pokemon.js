const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      //allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull:{
          msg: "El nombre no puede ser vacio"
        },
        isAlpha: {
          args: true,
          msg: "El nombre solo puede contener letras"
        },
        len: {
          args: [3,16],
          msg: "El nombre debe contener entre 3 y 16 caracteres"
        }
      }
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "La vida no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('La vida debe ser un entero positivo');
          }
        },
      },
    },
    str: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "La fuerza no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('La fuerza debe ser un entero positivo');
          }
        },
      },
    },
    def: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "La defensa no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('La defensa debe ser un entero positivo');
          }
        },
      },
    },
    spd: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "La velocidad no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('La velocidad debe ser un entero positivo');
          }
        },
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "La altura no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('La altura debe ser un entero positivo');
          }
        },
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull:{
          msg: "El peso no puede estar en blanco"
        },
        isPositiveInt(value) {
          if (parseInt(value) % 1 !== 0 || value < 0) {
            throw new Error('El peso debe ser un entero positivo');
          }
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg:'Debes insertar una imagen'
        }
      }
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,      
      defaultValue: true
    }
  });
};
