const Floorplan = require('../models/floorplan');
const { v4: uuidv4 } = require('uuid');

const floorplanController = {
  search: async (req, res) => {
    try {
      const result = await Floorplan.find(req.body.query || {});
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  getEntity: async (req, res) => {
    try {
      const result = await Floorplan.findOne({id: req.body.id});
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  getEntityById: async (req, res) => {
    try {
      const result = await Floorplan.findOne({id: req.params.id});
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  getAllEntities: async (req, res) => {
    try {
      const result = await Floorplan.find({});
      res.json({ data: result });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  },

  save: async (req, res) => {
    try {
      const data = req.body;
      let result;
      
      if (data.id) {
        result = await Floorplan.findOneAndUpdate(
          {id: data.id},
          {
            ...data,
            updatedOn: new Date(),
          },
          { new: true }
        );
        res.json({ data: { id: result.id, message: 'Updated successfully' } });
      } else {
        const floorplan = new Floorplan({
          id: uuidv4(),
          ...data,
          createdOn: new Date()
        });
        result = await floorplan.save();
        res.json({ data: { id: result.id, message: 'Save successfully' } });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await Floorplan.findOneAndDelete({id: req.body.id});
      
      if (!result) {
        return res.status(404).json({ error: 'Floor plan not found' });
      }
      
      res.json({ data: { id: result.id, message: 'Deleted successfully' } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = floorplanController;