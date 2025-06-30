"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calculator, RotateCcw } from "lucide-react"

interface CalculationResults {
  predictedTrialWeight: number
  effectiveVector: {
    amplitude: number
    phase: number
  }
  influenceCoefficient: {
    magnitude: number
    phase: number
  }
  heavySpot: {
    amplitude: number
    phase: number
  }
  correctionWeight: {
    amplitude: number
    phase: number
  }
  predictedResults: {
    influenceCoefficient: number
    heavySpot: number
    correctionWeight: number
  }
}

export default function RotorBalancingCalculator() {
  const [inputs, setInputs] = useState({
    oAmplitude: "",
    oPhase: "",
    otAmplitude: "",
    otPhase: "",
    twAmplitude: "",
    rotorSpeed: "",
    balancingRadius: "",
    rotorWeight: "",
    twPercentage: "",
    twPhase: "",
  })

  const [results, setResults] = useState<CalculationResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setInputs((prev) => ({ ...prev, [field]: value }))
  }

  const resetCalculator = () => {
    setInputs({
      oAmplitude: "",
      oPhase: "",
      otAmplitude: "",
      otPhase: "",
      twAmplitude: "",
      rotorSpeed: "",
      balancingRadius: "",
      rotorWeight: "",
      twPercentage: "",
      twPhase: "",
    })
    setResults(null)
  }

  const calculateBalancing = () => {
    setIsCalculating(true)

    try {
      // Convert inputs to numbers
      const oAmplitude = Number.parseFloat(inputs.oAmplitude)
      const oPhase = Number.parseFloat(inputs.oPhase)
      const otAmplitude = Number.parseFloat(inputs.otAmplitude)
      const otPhase = Number.parseFloat(inputs.otPhase)
      const twAmplitude = Number.parseFloat(inputs.twAmplitude)
      const rotorSpeed = Number.parseFloat(inputs.rotorSpeed)
      const balancingRadius = Number.parseFloat(inputs.balancingRadius)
      const rotorWeight = Number.parseFloat(inputs.rotorWeight)
      const twPercentage = Number.parseFloat(inputs.twPercentage)
      const twPhase = Number.parseFloat(inputs.twPhase)

      // Calculate predicted trial weight
      const twPredicted =
        (35.27396195 * ((twPercentage / 100) * rotorWeight * 0.45359237 * 9.81)) /
        (balancingRadius * 0.0245 * Math.pow(rotorSpeed * ((2 * Math.PI) / 60), 2))

      // Calculate Real and Imaginary components
      const reO = oAmplitude * Math.cos((oPhase * Math.PI) / 180)
      const imO = oAmplitude * Math.sin((oPhase * Math.PI) / 180)
      const reOt = otAmplitude * Math.cos((otPhase * Math.PI) / 180)
      const imOt = otAmplitude * Math.sin((otPhase * Math.PI) / 180)

      // Calculate effective vector
      const reT = reOt - reO
      const imT = imOt - imO
      const amplitudeT = Math.sqrt(reT * reT + imT * imT)
      const phaseT = (Math.atan2(imT, reT) * 180) / Math.PI + 360

      // Calculate influence coefficient
      const influenceCoefficient = twAmplitude / amplitudeT
      const phaseInfluenceCoefficient = twPhase - phaseT

      // Calculate heavy spot
      const hsAmplitude = influenceCoefficient * oAmplitude
      const hsPhase = oPhase + phaseInfluenceCoefficient

      // Calculate predicted influence coefficient
      const influenceCoefficientPredicted = twPredicted / amplitudeT
      const hsAmplitudePredicted = influenceCoefficientPredicted * oAmplitude

      // Calculate correction weight
      const cwAmplitude = hsAmplitude
      const cwAmplitudePredicted = hsAmplitudePredicted
      const cwPhase = hsPhase + 180

      setResults({
        predictedTrialWeight: twPredicted,
        effectiveVector: {
          amplitude: amplitudeT,
          phase: phaseT % 360,
        },
        influenceCoefficient: {
          magnitude: influenceCoefficient,
          phase: phaseInfluenceCoefficient,
        },
        heavySpot: {
          amplitude: hsAmplitude,
          phase: hsPhase,
        },
        correctionWeight: {
          amplitude: cwAmplitude,
          phase: cwPhase,
        },
        predictedResults: {
          influenceCoefficient: influenceCoefficientPredicted,
          heavySpot: hsAmplitudePredicted,
          correctionWeight: cwAmplitudePredicted,
        },
      })
    } catch (error) {
      console.error("Calculation error:", error)
    } finally {
      setIsCalculating(false)
    }
  }

  const isFormValid = Object.values(inputs).every((value) => value.trim() !== "")

  return (
    <div className="space-y-6">
      <Card className="bg-black/40 border border-white/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 silver-gradient">
            <Calculator className="h-5 w-5" />
            Single Plane Rotor Balancing Calculator
          </CardTitle>
          <p className="text-white/60 text-sm">
            Field balancing algorithm for rotor dynamics with minimal machinery pause
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="oAmplitude" className="text-white/80">
                Original Vibration Amplitude (mils)
              </Label>
              <Input
                id="oAmplitude"
                type="number"
                step="0.01"
                value={inputs.oAmplitude}
                onChange={(e) => handleInputChange("oAmplitude", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter amplitude"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="oPhase" className="text-white/80">
                Original Vibration Phase (degrees)
              </Label>
              <Input
                id="oPhase"
                type="number"
                step="0.01"
                value={inputs.oPhase}
                onChange={(e) => handleInputChange("oPhase", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter phase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="otAmplitude" className="text-white/80">
                Original + Trial Weight Amplitude (mils)
              </Label>
              <Input
                id="otAmplitude"
                type="number"
                step="0.01"
                value={inputs.otAmplitude}
                onChange={(e) => handleInputChange("otAmplitude", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter amplitude"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="otPhase" className="text-white/80">
                Original + Trial Weight Phase (degrees)
              </Label>
              <Input
                id="otPhase"
                type="number"
                step="0.01"
                value={inputs.otPhase}
                onChange={(e) => handleInputChange("otPhase", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter phase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twAmplitude" className="text-white/80">
                Trial Weight Amplitude (oz)
              </Label>
              <Input
                id="twAmplitude"
                type="number"
                step="0.01"
                value={inputs.twAmplitude}
                onChange={(e) => handleInputChange("twAmplitude", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter weight"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twPhase" className="text-white/80">
                Trial Weight Phase (degrees)
              </Label>
              <Input
                id="twPhase"
                type="number"
                step="0.01"
                value={inputs.twPhase}
                onChange={(e) => handleInputChange("twPhase", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter phase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rotorSpeed" className="text-white/80">
                Rotor Speed (RPM)
              </Label>
              <Input
                id="rotorSpeed"
                type="number"
                step="0.01"
                value={inputs.rotorSpeed}
                onChange={(e) => handleInputChange("rotorSpeed", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter RPM"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="balancingRadius" className="text-white/80">
                Balancing Radius (in)
              </Label>
              <Input
                id="balancingRadius"
                type="number"
                step="0.01"
                value={inputs.balancingRadius}
                onChange={(e) => handleInputChange("balancingRadius", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter radius"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="rotorWeight" className="text-white/80">
                Rotor Weight (Pounds)
              </Label>
              <Input
                id="rotorWeight"
                type="number"
                step="0.01"
                value={inputs.rotorWeight}
                onChange={(e) => handleInputChange("rotorWeight", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="Enter weight"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="twPercentage" className="text-white/80">
                Trial Weight Percentage (%)
              </Label>
              <Input
                id="twPercentage"
                type="number"
                step="0.01"
                value={inputs.twPercentage}
                onChange={(e) => handleInputChange("twPercentage", e.target.value)}
                className="bg-white/5 border-white/20 text-white"
                placeholder="e.g., 5, 10, 15"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              onClick={calculateBalancing}
              disabled={!isFormValid || isCalculating}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white"
            >
              {isCalculating ? "Calculating..." : "Calculate Balancing"}
            </Button>
            <Button
              onClick={resetCalculator}
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 bg-transparent"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section */}
      {results && (
        <Card className="bg-black/40 border border-white/10">
          <CardHeader>
            <CardTitle className="silver-gradient">Calculation Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Predicted Trial Weight</h4>
                  <Badge variant="secondary" className="bg-white/10 text-white">
                    {results.predictedTrialWeight.toFixed(2)} oz
                  </Badge>
                </div>

                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Effective Vibration Vector</h4>
                  <div className="text-white/70">
                    <p>
                      {results.effectiveVector.amplitude.toFixed(2)} mils at {results.effectiveVector.phase.toFixed(2)}°
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Influence Coefficient</h4>
                  <div className="text-white/70">
                    <p>
                      {results.influenceCoefficient.magnitude.toFixed(2)} at{" "}
                      {results.influenceCoefficient.phase.toFixed(2)}°
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Heavy Spot</h4>
                  <div className="text-white/70">
                    <p>
                      {results.heavySpot.amplitude.toFixed(2)} mils at {results.heavySpot.phase.toFixed(2)}°
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Correction Weight</h4>
                  <div className="text-white/70">
                    <p>
                      {results.correctionWeight.amplitude.toFixed(2)} mils at{" "}
                      {results.correctionWeight.phase.toFixed(2)}°
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white/90 font-semibold mb-2">Predicted Correction Weight</h4>
                  <div className="text-white/70">
                    <p>
                      {results.predictedResults.correctionWeight.toFixed(2)} mils at{" "}
                      {results.correctionWeight.phase.toFixed(2)}°
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
