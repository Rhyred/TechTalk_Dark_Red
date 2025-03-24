"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { CheckCircle, XCircle, AlertCircle, ArrowRight, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"

type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: number
}

type QuizProps = {
  title: string
  description: string
  questions: Question[]
  onComplete?: (score: number) => void
}

export function QuizSection({ title, description, questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(Array(questions.length).fill(-1))
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswerSelect = (value: string) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = Number.parseInt(value)
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setIsSubmitting(true)
      // Simulasi pengiriman ke server
      setTimeout(() => {
        setShowResults(true)
        setIsSubmitting(false)
        if (onComplete) {
          onComplete(calculateScore())
        }
      }, 1000)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswers(Array(questions.length).fill(-1))
    setShowResults(false)
  }

  const calculateScore = () => {
    const correctAnswers = selectedAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc
    }, 0)
    return Math.round((correctAnswers / questions.length) * 100)
  }

  const score = calculateScore()
  const isAllAnswered = selectedAnswers.every((answer) => answer !== -1)

  if (showResults) {
    return (
      <Card className="animate-fade-up">
        <CardHeader>
          <CardTitle>Hasil Quiz</CardTitle>
          <CardDescription>Anda telah menyelesaikan quiz {title}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center py-6">
            <div
              className={cn(
                "text-5xl font-bold mb-2",
                score >= 80 ? "text-green-500" : score >= 60 ? "text-amber-500" : "text-red-500",
              )}
            >
              {score}%
            </div>
            <div className="text-muted-foreground">
              {score >= 80 ? (
                <div className="flex items-center gap-2 text-green-500">
                  <CheckCircle className="h-5 w-5" />
                  <span>Sangat Baik! Anda menguasai materi ini.</span>
                </div>
              ) : score >= 60 ? (
                <div className="flex items-center gap-2 text-amber-500">
                  <AlertCircle className="h-5 w-5" />
                  <span>Cukup Baik. Ada beberapa konsep yang perlu dipelajari lagi.</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-red-500">
                  <XCircle className="h-5 w-5" />
                  <span>Perlu belajar lagi. Silakan pelajari kembali materi ini.</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Detail Jawaban:</h3>
            {questions.map((q, index) => (
              <div key={q.id} className="p-4 rounded-lg border">
                <div className="flex items-start gap-2">
                  {selectedAnswers[index] === q.correctAnswer ? (
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  ) : (
                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  )}
                  <div>
                    <p className="font-medium">{q.question}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Jawaban Anda: {q.options[selectedAnswers[index]]}
                    </p>
                    {selectedAnswers[index] !== q.correctAnswer && (
                      <p className="text-sm text-green-500 mt-1">Jawaban Benar: {q.options[q.correctAnswer]}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleReset} className="w-full">
            <RotateCcw className="mr-2 h-4 w-4" />
            Coba Lagi
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="animate-fade-up">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span>
              Pertanyaan {currentQuestion + 1} dari {questions.length}
            </span>
            <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-medium text-lg">{questions[currentQuestion].question}</h3>

          <RadioGroup
            value={selectedAnswers[currentQuestion] !== -1 ? selectedAnswers[currentQuestion].toString() : undefined}
            onValueChange={handleAnswerSelect}
            className="space-y-3"
          >
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} className="peer" />
                <Label
                  htmlFor={`option-${index}`}
                  className="flex-1 py-2 px-3 rounded-md peer-data-[state=checked]:bg-primary/10 hover:bg-muted cursor-pointer transition-colors"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          Sebelumnya
        </Button>
        <Button
          onClick={handleNext}
          disabled={selectedAnswers[currentQuestion] === -1 || isSubmitting}
          className="group"
        >
          {isSubmitting ? (
            "Mengirim..."
          ) : currentQuestion === questions.length - 1 ? (
            <>
              Selesai
              {isAllAnswered && <CheckCircle className="ml-2 h-4 w-4" />}
            </>
          ) : (
            <>
              Selanjutnya
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

