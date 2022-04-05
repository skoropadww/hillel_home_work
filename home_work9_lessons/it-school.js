const itSchool = {
    name: "Simple online school",
    description: "Simple online school description",
    maxGroupCount: 5,
    maxStudentsCountPerGroup: 13,
    availableCourses: ["Front-end Pro", "Front-end Basic"],
    startedGroups: [],
    __callback: {},

    __supportedEventTypes: { 
      GROUP_STARTED: "GROUP_STARTED", 
      GROUP_ENDED: "GROUP_ENDED"},

  startLearningGroup(courseName, amountOfStudents){
    if (this.availableCourses.includes(courseName)){
      if (amountOfStudents <= this.maxStudentsCountPerGroup){
        if (!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)){
          this.startedGroups.push({ courseName, amountOfStudents})
          this.dispatch(this.__supportedEventTypes.GROUP_STARTED, courseName)
        }else {
          console.log(`Started ${courseName} group!`);
        }
      } else {
        console.log(`We not supported ${amountOfStudents} amount of students`);
      }
    } else {
      console.log(`Sorry, course ${courseName} not supported yet.`);
    }
  },

  endLearningGroup(courseName){
    if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)){
      this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName);
      this.dispatch(this.__supportedEventTypes.GROUP_ENDED, courseName);
    } else {
      console.log(`You are trying to finish not existing learning group`);
    }
  },

  on(eventName, callback){
    if (eventName in this.__supportedEventTypes) this.__callback[eventName] = callback;
  },

  dispatch(eventName,data){
    this.__callback[eventName] && this.__callback[eventName](data);
  }
};

itSchool.on(
  itSchool.__supportedEventTypes.GROUP_STARTED,
  (courseName) => console.log(`О, стартовала новая группа по курсу ${courseName}!`),
);


itSchool.on(
  itSchool.__supportedEventTypes.GROUP_ENDED,
  (courseName) => console.log(`Group whith ${courseName} course successfully finished`),
);



// старт групп
itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 13);
itSchool.startLearningGroup("Python Basic", 6);

// конец групп
itSchool.endLearningGroup("Front-end Basic");
itSchool.endLearningGroup("Python Basic");