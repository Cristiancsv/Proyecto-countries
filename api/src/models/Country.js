const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {



    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }, 
    


    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  


   img: {
      type: DataTypes.STRING,
      allowNull: false
    },

    

    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },


    capital:{
      type:DataTypes.STRING,
      allowNull:false
    },


    subregion:{
      type: DataTypes.STRING
    },


    area: {
      type:DataTypes.DOUBLE,
      allowNull: false,
    },


     population: {
      type:DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
