import RotorBalancingCalculator from "@/components/rotor-balancing-calculator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CalculatorPage() {
  return (
    <main className="min-h-screen pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4 border-white/20 text-white hover:bg-white/5 bg-transparent">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl silver-gradient mb-4">Rotor Balancing Calculator</h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              A comprehensive tool for single plane balancing problems in rotor dynamics. This field balancing algorithm
              requires minimal machinery pause and provides accurate correction weight calculations.
            </p>
          </div>
        </div>

        <RotorBalancingCalculator />

        <div className="mt-12 p-6 bg-black/20 border border-white/10 rounded-lg">
          <h3 className="text-xl silver-gradient mb-4">About This Calculator</h3>
          <div className="text-white/70 space-y-3">
            <p>
              This calculator implements a field balancing algorithm for rotor dynamics, specifically designed for
              single plane balancing problems. The algorithm focuses on minimizing machinery downtime while providing
              accurate balancing solutions.
            </p>
            <p>
              <strong className="text-white/90">Key Features:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Calculates predicted trial weight based on rotor parameters</li>
              <li>Determines effective vibration vectors</li>
              <li>Computes influence coefficients for balancing analysis</li>
              <li>Identifies heavy spot location and magnitude</li>
              <li>Provides correction weight recommendations</li>
            </ul>
            <p>
              <strong className="text-white/90">Applications:</strong> Industrial rotating machinery, turbines,
              compressors, motors, and other rotating equipment requiring dynamic balancing.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
