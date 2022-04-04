const itSchool = {
    // свойства

    // свойства-массивы

    // методы 


};

itSchool.on(
    "GROUP_STARTED",
    (courseName) => console.log(`О, стартовала новая группа по курсу ${courseName}!`),
);


itSchool.on(
    "GROUP_ENDED",
    (courseName) => console.log(`О, похоже группа по курсу ${courseName} закончила свое обучение!`),
);



// старт групп
itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 13);
itSchool.startLearningGroup("Python Basic", 6);

// конец групп
itSchool.endLearningGroup("Front-end Basic");
itSchool.endLearningGroup("Python Basic");