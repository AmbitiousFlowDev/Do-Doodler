// 1
use("stagiaires");
db.stargiaires.find();

// 2
use("examen");
db.examen.find();

// 3
use("stagiaires");
db.stargiaires.find({}, { nom: 0, prenom: 0, _id: 0 });

// 4
use("examen");
db.examen.find({}, { num: 0, date: 0 });

// 5
use("stagiaires");
db.stargiaires.find().sort({ nom: -1 });

// 6
use("passerexamen");
db.passerexamen.find({ nums: "S01" }).sort({ datepassage: 1 });

// 7
use("passerexamen");
db.passerexamen.find({ nums: "S01" }, { nums: 0, note: 0 }).sort({ note: 1 });

// 8
use("examen");
db.examen.find(
  {
    $or: [
      {
        sale: "A2",
      },
      {
        sale: "A3",
      },
    ],
  },
  {
    sale: 0,
    nume: 0,
  }
);

//9
use("passerexamen");

selection = {
  nums: "S01",
  note: {
    $gte: 15,
  },
};

db.passerexamen.find(selection);

// 10
db.passerexamen.find(
  {
    note: {
      $gt: 15,
    },
  },

  {
    nums: 0,
  }
);

db.passerexamen
  .find(
    { nums: "S01" },
    {
      nume: 0,
    }
  )
  .limit(2);

// 12

use("stagiaire");
db.stagiaires.find({ nom: { $regex: /^A.*/ } }, { nom: 0, prenom: 0 });

// 13
use("examen");
db.examen.find().count();

// 14
use("examen");
db.examen.find({ salle: "B5" }).count();

// 15
use("examen");
db.examen
  .find({
    salle: {
      $in: ["E01", "E02", "E03"],
    },
  })
  .count();
