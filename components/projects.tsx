"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

type Project = {
  id: number
  title: {
    en: string
    ja: string
    de: string
  }
  description: {
    en: string
    ja: string
    de: string
  }
  tags: {
    en: string
    ja: string
    de: string
  }[]
  year: string
  type: {
    en: string
    ja: string
    de: string
  }
  github?: string
  demo?: string
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { t, language } = useLanguage()

  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: {
        en: "Simplification to Droplet Impact Fluid Surface Phenomenon Through Bouncing Ball Model",
        ja: "バウンシングボールモデルによる液滴衝突流体表面現象の単純化",
        de: "Vereinfachung des Flüssigkeitstropfen-Aufprallphänomens durch das Modell des springenden Balls",
      },
      description: {
        en: "The ball bouncing problem is a well-known problem in physics, involving a ball dropped from a height to the ground. In this paper, the work investigates the theoretical and experimental setup that describes the dynamics of a rigid body on a chaotic elastic surface under air-damp conditions. Examination of four different types of balls is made, including a marble, metal ball, tennis ball, and ping-pong ball. In this experiment, the effect of impact velocities is not considered; the ball is dropped from a fixed height. The method in this work employs the Rayleigh Dissipation Function to specify the effects of dissipative forces in Lagrangian mechanics. Our discoveries reveal that the dynamics of the ball exhibit horizontal motion while damping oscillation occurs during the destabilized vertical pinch-off motion. Moreover, rotational motion is studied, as the ball impacts asymmetrically on surface. According to the studies of four different balls, the outcomes illustrate that greater mass results in more frequent dynamics, and the experimental results at some points align with the theoretical model of the studied motion. This knowledge contributes to our understanding of the complex fluid system and could serve as a foundation for further developments in water droplet simulation.",
        ja: "ボールのバウンス問題は、物理学でよく知られている問題で、ボールが高さから地面に落下することを含みます。本論文では、空気減衰条件下でカオス的な弾性表面上の剛体の動力学を記述する理論的および実験的セットアップを調査しています。大理石、金属球、テニスボール、卓球ボールを含む4種類のボールの検査が行われました。この実験では、衝突速度の影響は考慮されておらず、ボールは固定された高さから落下します。この研究では、ラグランジュ力学における散逸力の効果を特定するためにレイリー散逸関数を使用しています。私たちの発見は、不安定な垂直ピンチオフ運動中に減衰振動が発生する間、ボールの動力学が水平運動を示すことを明らかにしています。さらに、ボールが表面に非対称に衝突するため、回転運動も研究されています。4つの異なるボールの研究によると、結果は質量が大きいほどより頻繁な動力学をもたらし、実験結果はいくつかの点で研究された運動の理論モデルと一致することを示しています。この知識は、複雑な流体システムの理解に貢献し、水滴シミュレーションのさらなる発展の基礎となる可能性があります。",
        de: "Das Problem des springenden Balls ist ein bekanntes Problem in der Physik, bei dem ein Ball aus einer Höhe auf den Boden fällt. In dieser Arbeit untersucht die Arbeit den theoretischen und experimentellen Aufbau, der die Dynamik eines starren Körpers auf einer chaotischen elastischen Oberfläche unter luftgedämpften Bedingungen beschreibt. Es werden vier verschiedene Arten von Bällen untersucht, darunter eine Murmel, ein Metallball, ein Tennisball und ein Tischtennisball. In diesem Experiment wird die Wirkung der Aufprallgeschwindigkeiten nicht berücksichtigt; der Ball wird aus einer festen Höhe fallen gelassen. Die Methode in dieser Arbeit verwendet die Rayleigh-Dissipationsfunktion, um die Auswirkungen dissipativer Kräfte in der Lagrange-Mechanik zu spezifizieren. Unsere Entdeckungen zeigen, dass die Dynamik des Balls eine horizontale Bewegung aufweist, während die Dämpfungsschwingung während der destabilisierten vertikalen Abschnürbewegung auftritt. Darüber hinaus wird die Rotationsbewegung untersucht, da der Ball asymmetrisch auf die Oberfläche aufprallt. Nach den Studien von vier verschiedenen Bällen zeigen die Ergebnisse, dass eine größere Masse zu einer häufigeren Dynamik führt, und die experimentellen Ergebnisse stimmen an einigen Punkten mit dem theoretischen Modell der untersuchten Bewegung überein. Dieses Wissen trägt zu unserem Verständnis des komplexen Flüssigkeitssystems bei und könnte als Grundlage für weitere Entwicklungen in der Wassertropfensimulation dienen.",
      },
      tags: [
        {
          en: "Droplet Impact",
          ja: "液滴衝突",
          de: "Tropfenaufprall",
        },
        {
          en: "Damping Oscillation",
          ja: "減衰振動",
          de: "Dämpfungsschwingung",
        },
        {
          en: "Bouncing Object",
          ja: "バウンシングオブジェクト",
          de: "Springendes Objekt",
        },
      ],
      year: "2023-2024",
      type: {
        en: "Science Fair",
        ja: "科学フェア",
        de: "Wissenschaftsmesse",
      },
    },
    {
      id: 2,
      title: {
        en: "Theoretical Model of a Bouncing Ball System Under Elastic Platform",
        ja: "弾性プラットフォーム下でのバウンシングボールシステムの理論モデル",
        de: "Theoretisches Modell eines springenden Ballsystems unter elastischer Plattform",
      },
      description: {
        en: "Bouncing balls are a well-known problem in physics, where a ball drops from a height to the ground. Despite its simplicity, a ball may exhibit fascinating behaviors upon surface impaction. This research delves into the bouncing ball problem under different surface conditions by allowing the surface to vibrate freely owing to an external impulse. The experiment was conducted to study the impact of a ball on an elastic surface upon the presence of air-damping. Four types of balls were included in the examination: steel ball, marble, tennis ball, and ping-pong ball. The consideration of ball dynamics was taken in two parts including ball bouncing and oscillating. However, the complexity occurs when the ball oscillates in contact with the surface. To understand chaos, Finite Element Analysis and Python Computing were employed to form the simulations while pre-dicting the surface behaviors that affect the ball motion. Moreover, RDI high-speed cameras were used for motion amplification and to analyze the surface vibration more precisely. Our discovery revealed the relationship between damping ratio, peak-to-peak displacement, oscillation frequency, and amplitudes upon different kinds of mass. Fi-nally, this research contributes to the development of facets of spray research such as improvement in the spray nozzle in the cooling tower.",
        ja: "バウンシングボールは物理学でよく知られている問題で、ボールが高さから地面に落下します。その単純さにもかかわらず、ボールは表面への衝突時に魅力的な挙動を示すことがあります。この研究は、外部インパルスによって表面が自由に振動することを可能にすることにより、異なる表面条件下でのバウンシングボール問題を掘り下げています。実験は、空気減衰の存在下で弾性表面へのボールの衝撃を研究するために行われました。鋼球、大理石、テニスボール、卓球ボールの4種類のボールが検査に含まれていました。ボールの動力学の考慮は、ボールのバウンスと振動を含む2つの部分で行われました。しかし、複雑さは、ボールが表面と接触して振動するときに発生します。カオスを理解するために、有限要素解析とPythonコンピューティングが、ボールの動きに影響を与える表面の挙動を予測しながらシミュレーションを形成するために使用されました。さらに、RDI高速カメラが動きの増幅と表面振動をより正確に分析するために使用されました。私たちの発見は、減衰比、ピークツーピーク変位、振動周波数、および異なる種類の質量に対する振幅の関係を明らかにしました。最後に、この研究は、冷却塔のスプレーノズルの改善など、スプレー研究の側面の発展に貢献しています。",
        de: "Springende Bälle sind ein bekanntes Problem in der Physik, bei dem ein Ball aus einer Höhe auf den Boden fällt. Trotz seiner Einfachheit kann ein Ball beim Aufprall auf die Oberfläche faszinierende Verhaltensweisen zeigen. Diese Forschung befasst sich mit dem Problem des springenden Balls unter verschiedenen Oberflächenbedingungen, indem sie es der Oberfläche ermöglicht, aufgrund eines externen Impulses frei zu schwingen. Das Experiment wurde durchgeführt, um die Auswirkung eines Balls auf eine elastische Oberfläche bei Vorhandensein von Luftdämpfung zu untersuchen. Vier Arten von Bällen wurden in die Untersuchung einbezogen: Stahlkugel, Murmel, Tennisball und Tischtennisball. Die Betrachtung der Balldynamik wurde in zwei Teilen vorgenommen, einschließlich Ballspringen und Oszillieren. Die Komplexität tritt jedoch auf, wenn der Ball in Kontakt mit der Oberfläche schwingt. Um Chaos zu verstehen, wurden Finite-Elemente-Analyse und Python-Computing eingesetzt, um die Simulationen zu bilden, während die Oberflächenverhaltensweisen, die die Ballbewegung beeinflussen, vorhergesagt wurden. Darüber hinaus wurden RDI-Hochgeschwindigkeitskameras für die Bewegungsverstärkung und zur genaueren Analyse der Oberflächenschwingung verwendet. Unsere Entdeckung offenbarte die Beziehung zwischen Dämpfungsverhältnis, Spitze-zu-Spitze-Verschiebung, Schwingungsfrequenz und Amplituden bei verschiedenen Arten von Masse. Schließlich trägt diese Forschung zur Entwicklung von Facetten der Sprühforschung bei, wie z.B. Verbesserung der Sprühdüse im Kühlturm.",
      },
      tags: [
        {
          en: "Damping Oscillation",
          ja: "減衰振動",
          de: "Dämpfungsschwingung",
        },
        {
          en: "Chaos",
          ja: "カオス",
          de: "Chaos",
        },
        {
          en: "Bouncing Ball Problem",
          ja: "バウンシングボール問題",
          de: "Problem des springenden Balls",
        },
      ],
      year: "2024",
      type: {
        en: "Science Fair",
        ja: "科学フェア",
        de: "Wissenschaftsmesse",
      },
    },
    {
      id: 3,
      title: {
        en: "Finite Element Method Approach Modal Characterization of a Rigid-Beam Axial Oscillation Under Load",
        ja: "負荷下での剛性ビーム軸方向振動のモーダル特性化に対する有限要素法アプローチ",
        de: "Finite-Elemente-Methode Ansatz zur modalen Charakterisierung einer axialen Schwingung eines starren Balkens unter Last",
      },
      description: {
        en: "The axial oscillation of long beams has been extensively studied for various engineering applications, such as structural optimization in civil and mechanical design. In addition to transverse oscillations, long rigid beams are also susceptible to axial oscillations, which can contribute to structural instability, potentially leading to long-term failure and adverse effects on engineering systems. This study focuses on the mathematical model enhance structural dynamics derived from the analysis of a rigid beams received axially static loaded conditions. A generalized approach is adopted by modeling the beam as a simple rectangular structure to isolate the fundamental oscillatory behavior. The mathematical model is developed using the Finite Difference Method (FDM) and validated through the Finite Element Method (FEM) using CalculiX to determine the mode shapes exceed by the beam. The results from LU Decomposition Method (LUD) confirm the validity of the formulated system of linear algebraic equations. Also this work reveals the natural frequencies from dynamic responses and corresponding mode-shapes related to longitudinal oscillation. The solutions obtained from both the mathematical model and the numerical studies show a strong correlation. These findings offer insights into the structural integrity and axial vibrational characteristics of rigid beams, with valuable implications for the further engineering applications.",
        ja: "長いビームの軸方向振動は、土木および機械設計における構造最適化など、さまざまな工学的応用のために広範囲に研究されています。横方向の振動に加えて、長い剛性ビームも軸方向の振動を受けやすく、これが構造的不安定性に寄与し、潜在的に長期的な故障や工学システムへの悪影響をもたらす可能性があります。この研究は、軸方向に静的に負荷された条件を受けた剛性ビームの分析から導出された構造動力学を強化する数学的モデルに焦点を当てています。基本的な振動挙動を分離するために、ビームを単純な長方形構造としてモデル化する一般化されたアプローチが採用されています。数学的モデルは有限差分法（FDM）を使用して開発され、CalculiXを使用した有限要素法（FEM）を通じて検証され、ビームによって超えるモード形状を決定します。LU分解法（LUD）の結果は、定式化された線形代数方程式系の妥当性を確認します。また、この研究は動的応答からの固有周波数と縦方向振動に関連する対応するモード形状を明らかにします。数学的モデルと数値研究の両方から得られた解決策は強い相関関係を示しています。これらの発見は、剛性ビームの構造的完全性と軸方向振動特性に関する洞察を提供し、さらなる工学的応用に貴重な意味を持ちます。",
        de: "Die axiale Schwingung langer Balken wurde für verschiedene technische Anwendungen, wie die Strukturoptimierung im Bau- und Maschinenbau, ausführlich untersucht. Zusätzlich zu Querschwingungen sind lange starre Balken auch anfällig für axiale Schwingungen, die zur strukturellen Instabilität beitragen können, was potenziell zu langfristigem Versagen und nachteiligen Auswirkungen auf technische Systeme führen kann. Diese Studie konzentriert sich auf das mathematische Modell zur Verbesserung der Strukturdynamik, das aus der Analyse eines starren Balkens unter axial statisch belasteten Bedingungen abgeleitet wurde. Ein verallgemeinerter Ansatz wird durch Modellierung des Balkens als einfache rechteckige Struktur angenommen, um das grundlegende Schwingungsverhalten zu isolieren. Das mathematische Modell wird mit der Finite-Differenzen-Methode (FDM) entwickelt und durch die Finite-Elemente-Methode (FEM) mit CalculiX validiert, um die vom Balken überschrittenen Modenformen zu bestimmen. Die Ergebnisse der LU-Zerlegungsmethode (LUD) bestätigen die Gültigkeit des formulierten Systems linearer algebraischer Gleichungen. Diese Arbeit offenbart auch die natürlichen Frequenzen aus dynamischen Antworten und entsprechende Modenformen im Zusammenhang mit Längsschwingungen. Die Lösungen, die sowohl aus dem mathematischen Modell als auch aus den numerischen Studien gewonnen wurden, zeigen eine starke Korrelation. Diese Erkenntnisse bieten Einblicke in die strukturelle Integrität und axiale Schwingungseigenschaften starrer Balken mit wertvollen Implikationen für weitere technische Anwendungen.",
      },
      tags: [
        {
          en: "Finite Element Method",
          ja: "有限要素法",
          de: "Finite-Elemente-Methode",
        },
        {
          en: "Beam",
          ja: "ビーム",
          de: "Balken",
        },
        {
          en: "Structural Dynamics",
          ja: "構造動力学",
          de: "Strukturdynamik",
        },
      ],
      year: "2024-2025",
      type: {
        en: "Conference Series",
        ja: "会議シリーズ",
        de: "Konferenzreihe",
      },
    },
  ])

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">{t("projects.title")}</h2>
          <div className="h-1 w-20 bg-primary mt-4 mx-auto"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex-grow flex flex-col">
                  <div className="mb-4 flex justify-between items-start">
                    <Badge variant="outline" className="mb-2">
                      {project.type[language]}
                    </Badge>
                    <span className="text-xs font-medium bg-muted px-2 py-1 rounded-md">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold mb-3">{project.title[language]}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow text-justify">
                    {project.description[language]}
                  </p>

                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag.en} variant="secondary" className="text-xs">
                          {tag[language]}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      {project.github && (
                        <Button asChild variant="outline" size="sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button asChild size="sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
