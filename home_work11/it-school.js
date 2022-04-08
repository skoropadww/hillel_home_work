const itSchool = {
  name: "Simple online school",
  description: "Simple online school description",
  maxGroupCount: 5,
  maxStudentsCountPerGroup: 13,
  availableCourses: ["Front-end Pro", "Front-end Basic", "Python Basic"],
  startedGroups: [],
  __callback: {},

  __supportedEventTypes: {
    GROUP_STARTED: "GROUP_STARTED",
    GROUP_ENDED: "GROUP_ENDED"
  },

  addCourse(courseName){
    if (!this.availableCourses.includes(courseName)) {
      this.availableCourses.push(courseName);
      console.log(`The course ${courseName} was successfully added to the training program`);
    }else {
      console.log(`This ${courseName} available in our program`);
    }
  },

  removeCourse(courseName){
    if (this.availableCourses.includes(courseName)) {
      this.availableCourses.pop(courseName);
      console.log(`The course ${courseName} was removed from the curriculum`);
    }else {
      console.log(`We do not have this course : ${cousreName}`);
    }
  },


  startLearningGroup(courseName, amountOfStudents, totalLessons, passedLessons) {
    if (this.availableCourses.includes(courseName)) {
      if (amountOfStudents <= this.maxStudentsCountPerGroup) {
        if (!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
          this.startedGroups.push({ courseName, amountOfStudents, totalLessons, passedLessons })
          this.dispatch(this.__supportedEventTypes.GROUP_STARTED, courseName);
          console.log(`Started ${courseName} : ${amountOfStudents} : ${totalLessons}  group!`);
        } else {
          console.log(`Started ${courseName} group!`);
        }
      } else {
        console.log(`We not supported ${amountOfStudents} amount of students`);
      }
    } else {
      console.log(`Sorry, course ${courseName} not supported yet.`);
    }
  },

  endLearningGroup(courseName, passedLessons) {
    if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
      if (this.startedGroups.some((startedGroup) => startedGroup.passedLessons === startedGroup.totalLessons && startedGroup.passedLessons === passedLessons)) {
        this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName);
        this.dispatch(this.__supportedEventTypes.GROUP_ENDED, courseName);
      }else {
        console.log(`This group has not completed all the classes yet `);
      }

    } else {
      console.log(`You are trying to finish not existing learning group`);
    }
  },

  on(eventName, callback) {
    if (eventName in this.__supportedEventTypes) this.__callback[eventName] = callback;
  },

  dispatch(eventName, data) {
    this.__callback[eventName] && this.__callback[eventName](data);
  },

  // Не понимаю как реализовать можно подсказку !!!

  // doneLesson(courseName) {
  //   if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
  //     if (!this.startedGroups.some((startedGroup) => startedGroup.totalLessons === startedGroup.passedLessons)) {
  //       startedGroup.passedLessons ++;
  //       console.log(`${courseName} ${startedGroup.passedLessons}`);
  //     }
  //     else {
  //       console.log(`You doing somting wrong2`);
  //     }
  //   } else {
  //     console.log(`You doing somting wrong1`);
  //   }
  // }
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
itSchool.startLearningGroup("Front-end Pro", 10, 10, 6);
itSchool.startLearningGroup("Front-end Basic", 13, 10, 10);
itSchool.startLearningGroup("Python Basic", 6, 13, 13);

console.log("----");
itSchool.doneLesson("Front-end Pro");
console.log("----");
// конец групп
console.log("End group");
itSchool.endLearningGroup("Front-end Basic", 10);
itSchool.endLearningGroup("Python Basic", 13);


console.log(itSchool.availableCourses);

