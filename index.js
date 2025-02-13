const fetchAll = async (where, model, options = {}) => {
  try {
    const { select, populate, sort, limit, skip } = options;

    let query = model?.find(where);

    if (select) query = query.select(select); // Select specific fields
    if (populate) query = query.populate(populate); // Populate referenced fields
    if (sort) query = query.sort(sort); // Sorting results
    if (limit) query = query.limit(limit); // Limiting results
    if (skip) query = query.skip(skip); // Skipping results for pagination

    return await query.exec();
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const fetchOne = async (where, model, options = {}) => {
  try {
    const { select, populate } = options;

    let query = model?.findOne(where);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);

    return await query.exec();
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const generate = async (what, model) => {
  try {
    return await model?.create({ ...what });
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const fetchById = async (id, model, options = {}) => {
  try {
    const { select, populate } = options;

    let query = model?.findById(id);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);

    return await query.exec();
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const patchOneAndUpdate = async (
  where = {},
  update = {},
  model,
  options = {}
) => {
  try {
    const result = await model
      ?.findOneAndUpdate(where, update, { ...options })
      .exec();
    return result;
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const patchByIdAndUpdate = async (id, update = {}, model, options = {}) => {
  try {
    const result = await model
      ?.findByIdAndUpdate(id, update, { ...options })
      .exec();
    return result;
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const patchOne = async (where = {}, update = {}, model, options = {}) => {
  try {
    const result = await model?.updateOne(where, update, options).exec();
    return result;
  } catch (error) {
    throw new Error(`Error updating document: ${error.message}`);
  }
};

const patchMany = async (where = {}, update = {}, model, options = {}) => {
  try {
    const result = await model?.updateMany(where, update, options).exec();
    return result;
  } catch (error) {
    throw new Error(`Error updating documents: ${error.message}`);
  }
};

const replaceOne = async (
  where = {},
  replacement = {},
  model,
  options = {}
) => {
  try {
    const result = await model?.replaceOne(where, replacement, options).exec();
    return result;
  } catch (error) {
    throw new Error(`Error replacing document: ${error.message}`);
  }
};

const removeOne = async (where = {}, model, options = {}) => {
  try {
    const result = await model?.deleteOne(where, options).exec();
    return result;
  } catch (error) {
    throw new Error(`Error deleting document: ${error.message}`);
  }
};

const removeMany = async (where = {}, model, options = {}) => {
  try {
    const result = await model?.deleteMany(where, options).exec();
    return result;
  } catch (error) {
    throw new Error(`Error deleting document: ${error.message}`);
  }
};

const summarize = async (model, fields = []) => {
  try {
    const summary = await model?.aggregate(fields).exec();
    return summary;
  } catch (error) {
    console.error("Error summarizing data:", error);
    throw error;
  }
};

module.exports = {
  fetchAll,
  fetchOne,
  generate,
  fetchById,
  patchOneAndUpdate,
  patchByIdAndUpdate,
  patchOne,
  patchMany,
  replaceOne,
  removeOne,
  removeMany,
  summarize,
};
