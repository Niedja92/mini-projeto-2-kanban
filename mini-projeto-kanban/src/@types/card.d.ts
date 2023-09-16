//crie um Literal Type
type Column = "TODO" | "DOING" | "DONE"

interface Card {
    _id: string
    title: string
    content: string
    column: Column
}