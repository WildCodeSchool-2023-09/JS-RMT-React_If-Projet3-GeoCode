// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const searchTerm = req.query.searchTerm || "";
    // Fetch all profils from the database
    const profils = await tables.profil.readAll(searchTerm);

    // Respond with the profils in JSON format
    res.status(200).json(profils);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific profil from the database based on the provided ID
    const profil = await tables.profil.read(req.params.id);

    //     // If the profil is not found, respond with HTTP 404 (Not Found)
    //     // Otherwise, respond with the profil in JSON format
    if (profil.length === 0) {
      res.sendStatus(404);
    } else {
      res.status(200).json(profil);
    }
  } catch (err) {
    //     // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the profil data from the request body
  const profil = req.body;
  const userId = req.user.id;
  try {
    // Insert the profil into the database
    const insertId = await tables.profil.create(profil, userId);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted profil
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
