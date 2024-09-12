const FormProgress = require('../models/FormProgress');

exports.saveProgress = async (req, res) => {
  const { userId, step, data } = req.body;
  try {
    const progress = await FormProgress.findOneAndUpdate(
      { userId },
      { step, data },
      { upsert: true, new: true }
    );
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Error saving progress', error });
  }
};

exports.getProgress = async (req, res) => {
  const { userId } = req.params;
  try {
    const progress = await FormProgress.findOne({ userId });
    res.json(progress || { step: 1 });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving progress', error });
  }
};
