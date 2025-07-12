"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Camera,
  FileText,
  BarChart3,
  Shield,
  Download,
  Users,
  Clock,
  Mail,
  Phone,
  MapPin,
  Zap,
  BookOpen,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function ClassnoteLanding() {
  const features = [
    {
      icon: <Camera className="h-8 w-8 text-blue-600" />,
      title: "Photo-Based Grading",
      description: "Simply take a photo of the answer key and student exams. Our AI handles the rest.",
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Digital Test Creation",
      description: "Convert written tests to digital format with secure, unique links for students.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
      title: "Advanced Analytics",
      description: "Track student progress, detect patterns, and generate detailed performance reports.",
    },
    {
      icon: <Download className="h-8 w-8 text-blue-600" />,
      title: "Export & Reports",
      description: "Export grades to spreadsheets and generate automated parent reports.",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Cheating Detection",
      description: "AI-powered analysis identifies suspicious response patterns automatically.",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Instant Results",
      description: "Grade entire classes in seconds, not hours. Save valuable time for teaching.",
    },
  ]

  const plans = [
    {
      name: "Basic Plan",
      price: "$12.99",
      period: "/month",
      description: "Perfect for individual teachers",
      features: ["Grade up to 50 written exams per month", "Export graded exams in record format", "Basic support"],
      popular: false,
    },
    {
      name: "Intermediate Plan",
      price: "$24.99",
      period: "/month",
      description: "Ideal for active educators",
      features: [
        "Grade up to 250 written exams per month",
        "Export graded exams in record format",
        "Student response analysis",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Full Plan",
      price: "$49.99",
      period: "/month",
      description: "Complete solution for schools",
      features: [
        "Grade up to 250 written exams per month",
        "Export graded exams in record format",
        "Student response analysis",
        "Digitalization of written exams",
        "Parent reporting system",
        "Premium support",
      ],
      popular: false,
    },
  ]

  const steps = [
    {
      number: "1",
      title: "Take a Photo",
      description: "Capture the solved answer key with correct answers and procedures",
    },
    {
      number: "2",
      title: "Upload Student Exams",
      description: "Take photos of each student's completed exam",
    },
    {
      number: "3",
      title: "AI Analysis",
      description: "Our AI compares and analyzes all responses automatically",
    },
    {
      number: "4",
      title: "Get Results",
      description: "Receive instant grades, scores, and detailed analytics",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Classnote</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                How It Works
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            🚀 Revolutionary AI-Powered Grading
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Grade Exams in <span className="text-blue-600">Seconds</span>,
            <br />
            Not Hours
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Classnote uses artificial intelligence to help teachers evaluate written exams quickly and accurately.
            Simply take a photo, and let our AI do the grading work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Zap className="mr-2 h-5 w-5" />
              Reserve Early Access
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 bg-transparent">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">🎯 Be among the first to experience the future of exam grading</p>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge Teachers Face Every Day</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Latin America, teachers and students still rely on paper-based testing, leading to long waits for
              results and countless hours of manual grading work. There has to be a better way.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Hours of Manual Work</h3>
              <p className="text-gray-600">
                Teachers spend countless hours grading papers instead of focusing on teaching
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Delayed Results</h3>
              <p className="text-gray-600">Students wait days or weeks to receive feedback on their performance</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Analytics</h3>
              <p className="text-gray-600">Difficult to track progress and identify learning patterns</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Classnote Works</h2>
            <p className="text-lg text-gray-600">Simple, fast, and accurate - grading made effortless</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600">Everything you need to revolutionize your grading process</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">Flexible pricing for teachers and institutions of all sizes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "border-blue-500 border-2 shadow-xl" : "border-gray-200"}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"}`}
                  >
                    Reserve This Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Grading?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist and be among the first educators to experience the future of exam grading.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Zap className="mr-2 h-5 w-5" />
            Reserve Your Spot Now
          </Button>
          <p className="text-sm mt-4 opacity-75">💳 Secure your early access with a small reservation fee</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">hector@joshtechs.com</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+507 6968-9213</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600">
                Costa del Este
                <br />
                Panama City, Panama
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <BookOpen className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-2xl font-bold">Classnote</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2025 Classnote. All rights reserved.</p>
              <p className="text-gray-400 text-sm mt-1">Revolutionizing education through AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
