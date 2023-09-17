// import { Dispatch, SetStateAction } from "react"
// import { Box, Column } from "../../assets/global-style"
// import { updateCardService } from "../../services/card-service"

// type Props = {
//     title: string
//     content: string
//     setCards: Dispatch<SetStateAction<Card[]>>
// }

// export default function Cards({ title, content, setCards }: Props) {

//     const updateCard = async (card: Card, position: 'right') => {
//         let column = card.column

//         if (['NEW'].includes(column)) {
//             column = 'NEW'
//         } else (position === 'right') {
//             column = 'DOING'
//         }

//         const response = await updateCardService({
//             ...card,
//             column
//         })

//         setCards(response)
//     }

//     const moveToRight = (card: Card) => {
//         updateCard(card, 'right')
//     }

//     return (
//         <Column>
//             <h1>{title}</h1>

//             <div>
//                 {cards.map(content => (
//                     <Box key={card._id}>
//                         <h3>{card.title} - {card.column}</h3>
//                         <div>{card.content}</div>
//                         <div>
//                             {card.column !== 'DOING' && <button onClick={() => moveToRight(card)}>&gt;</button>}
//                         </div>
//                     </Box>
//                 ))}
//             </div>
//         </Column>
//     )
// }