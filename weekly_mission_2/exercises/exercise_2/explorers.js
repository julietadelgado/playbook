const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
]

console.log('\n')
console.log('1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
explorers.forEach(explorer => console.log(explorer.name))
console.log('\n')

console.log('2. Imprime el stack de cada explorer, usa FOR EACH')
explorers.forEach(explorer => console.log(explorer.stack))
console.log('\n')

console.log('3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
const explorers_stacks = explorers.map(explorer => explorer.stack)
console.log(explorers_stacks)
console.log('\n')

console.log('4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
const explorers_with_stack_js = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(explorers_with_stack_js)
console.log('\n')

console.log('5. Busca el primer explorer que sea de la CDMX, usa FIND')
const explorer_CDMX = explorers.find(explorer => explorer.city === 'CDMX')
console.log(explorer_CDMX)
console.log('\n')

console.log('6. Obtén la suma de todos los exercises_completed, usa REDUCE')
const total_completed_exercises = explorers.reduce((accumulator, explorer) => accumulator + explorer.exercises_completed, 0)
console.log('Total completed exercises: ' + total_completed_exercises)
console.log('\n')

console.log('7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
const does_someone_has_exercises_finished_on_frontend = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
console.log('Does someone has exercises finished on frontend mission? ' + does_someone_has_exercises_finished_on_frontend)
console.log('\n')

console.log('8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.')
const everyone_is_finished_onboarding = explorers.every((explorer) =>  explorer.missions.onboarding.isFinished === true)
console.log('Did everyone finish the onboarding? ' + everyone_is_finished_onboarding)
console.log('\n')