let victorina = (function(){
    
    //1. КОНСТРУКТОР ВОПРОСОВ
    function Question(question, answers, rightAnswer) {
    this.question = question;
    this.answers = answers;
    this.rightAnswer = rightAnswer;                     
    
    }

    Question.prototype.print = function() {
        console.log(this.question);
        
        this.answers.forEach((answer, i) => {
            console.log(`${i + 1}. ${answer}`);
        })    
    };

    Question.prototype.checkAnswer = function(userAnswer) {
        if (Number(userAnswer) === this.rightAnswer) {
            console.log('Отлично! Ответ верный.');
            counter++;
            console.log(`Количество баллов: ${counter}`);
        } else {
            console.log('Неправильно, попробуйте еще раз.');
        }
    };


    let question1 = new Question('Когда отмечатется день программиста?', 
    ['15 марта', '9 ноября', '30 февраля', '256 день года'],
    4 );
    
    let question2 = new Question('В какой части серии фильмов "Властелин колец" Гендальф Серый стал белым магом?',
    ['Братсво кольца', 'Две твердыни', 'Возвращение Короля', 'Хоббит: туда и обратно'],
    2);
    
    let question3 = new Question('Сколько звезд в Солнечной системе?', 
    ['1', '8', 'Точное количество неизвестно', '946 миллиардов'], 
    1);
    
    let question4 = new Question('Какая у меня будет зарплата после прохождения этого курса?', 
    ['50 000 рублей', '100 000 рублей', '100500 тыщ миллионов', 'Тебя никто не возьмет на работу'], 
    3);
   


    //2. ВЫВОДИМ РАНДОМНЫЙ ВОПРОС В КОНСОЛЬ
    let allQuestions = [question1, question2, question3, question4];

    let counter = 0;

    function askQuestion() {

        //1. ПОЛУЧАЕМ РАНДОМНЫЙ ОБЪЕКТ
        let randomNumber = getRandomQuestion(0, allQuestions.length - 1);
        let randomQuestion = allQuestions[randomNumber];


        //2. ВЫЗЫВАЕМ ЕГО МЕТОД, КОТОРЫЙ ВЫВОДИТ ВОПРОС И ВАРИАНТЫ ОТВЕТОВ В КОНСОЛЬ
        randomQuestion.print();

        //3. ЗАПРОС ОТВЕТА ОТ ПОЛЬЗОВАТЕЛЯ
        let userAnswer = prompt('Введите номер правильного ответа.');
        
        
        //4. ВЫХОД ИЗ ВИКТОРИНЫ
        if(userAnswer === 'exit' || userAnswer === null) {
            return console.log('Выход из игры.');
        }
        
        //5. МЕТОД КОТОРЫЙ ПРОВЕРЯЕТ ПРАВИЛЬНОСТЬ ОТВЕТА     
        randomQuestion.checkAnswer(userAnswer);

        askQuestion();          
        
    }

    askQuestion();



    //ФУНКЦИЯ КОТОРАЯ ВОЗВРАЩАЕТ РАНДОМНОЕ ЧИСЛО ИЗ ЗАДАННОГО ДИАПАЗОНА ВКЛЮЧИТЕЛЬНО
    function getRandomQuestion(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    };

})();

