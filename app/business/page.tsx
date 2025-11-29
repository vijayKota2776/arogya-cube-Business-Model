'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function BusinessModelPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
                <div className="container mx-auto px-6 py-6">
                    <h1 className="text-3xl font-bold tracking-tight">
                        📊 Arogya Cube Business Model
                    </h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Comprehensive financial analysis and strategic roadmap
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-12">
                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 gap-2 bg-muted/50 p-2">
                        <TabsTrigger value="overview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Overview
                        </TabsTrigger>
                        <TabsTrigger value="financial" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Financial Analysis
                        </TabsTrigger>
                        <TabsTrigger value="capex" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            CAPEX/OPEX
                        </TabsTrigger>
                        <TabsTrigger value="revenue" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Revenue Model
                        </TabsTrigger>
                        <TabsTrigger value="roadmap" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                            Roadmap
                        </TabsTrigger>
                    </TabsList>

                    {/* OVERVIEW TAB */}
                    <TabsContent value="overview" className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-8">Executive Summary</h2>

                            <div className="grid gap-6 md:grid-cols-2 mb-8">
                                <Card className="border-white/10 bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            🎯 Problem Statement
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex gap-2">
                                                <span className="text-primary">▸</span>
                                                <span>Current medical devices: Bulky, expensive, fragmented</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">▸</span>
                                                <span>Hospitals struggle with patient monitoring during surge</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">▸</span>
                                                <span>No affordable IoT solution for field operations</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">▸</span>
                                                <span>Data silos - devices don&apos;t communicate</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-primary">▸</span>
                                                <span>Training overhead for existing systems</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-white/10 bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            💡 Our Solution
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex gap-2">
                                                <span className="text-chart-2">▸</span>
                                                <span>13+ sensors in ONE compact cube</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-chart-2">▸</span>
                                                <span>Real-time cloud-based monitoring</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-chart-2">▸</span>
                                                <span>AI-powered predictive analytics</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-chart-2">▸</span>
                                                <span>Plug-and-play setup (5 minutes)</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="text-chart-2">▸</span>
                                                <span>Affordable: ₹15,000-₹25,000 per unit</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2 mb-8">
                                <Card className="border-white/10 bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <CardTitle>🎪 Target Market</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {[
                                                { label: 'Private Hospitals', value: '₹400+ Crores' },
                                                { label: 'Clinics & Diagnostic Centers', value: '₹150+ Crores' },
                                                { label: 'Home Healthcare', value: '₹200+ Crores' },
                                                { label: 'Emergency Response', value: '₹100+ Crores' }
                                            ].map((item, i) => (
                                                <div key={i} className="flex justify-between items-center p-3 rounded-lg bg-muted/30 border border-white/5 hover:bg-muted/50 transition-colors">
                                                    <span className="text-sm text-muted-foreground">{item.label}</span>
                                                    <Badge variant="outline" className="text-primary border-primary/50">{item.value}</Badge>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-white/10 bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <CardTitle>📈 Market Opportunity</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-4">
                                            {[
                                                { number: '5,000+', label: 'Private Hospitals in India' },
                                                { number: '50,000+', label: 'Diagnostic Centers' },
                                                { number: '₹850 Cr', label: 'Total Addressable Market' },
                                                { number: '2-3 years', label: 'Payback Period' }
                                            ].map((stat, i) => (
                                                <div key={i} className="text-center p-4 rounded-lg bg-muted/30 border border-white/5">
                                                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                                                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>🚀 Unique Selling Points</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[
                                            { title: 'All-in-One', desc: '13+ sensors vs 5-6 separate devices' },
                                            { title: 'Affordable', desc: '₹15,000-₹25,000 vs ₹50,000+ for equivalent setup' },
                                            { title: 'AI-Powered', desc: 'Predictive analytics for surge management' },
                                            { title: 'Easy Integration', desc: 'Cloud-ready with REST APIs' },
                                            { title: 'Minimal Training', desc: 'Mobile dashboard, intuitive UI' }
                                        ].map((usp, i) => (
                                            <div key={i} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-white/5 hover:bg-muted/50 transition-colors">
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-chart-2/20 flex items-center justify-center text-chart-2 font-bold">
                                                    ✓
                                                </div>
                                                <div>
                                                    <strong className="text-white">{usp.title}:</strong>{' '}
                                                    <span className="text-muted-foreground">{usp.desc}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>

                    {/* FINANCIAL ANALYSIS TAB */}
                    <TabsContent value="financial" className="space-y-8">
                        <h2 className="text-4xl font-bold mb-8">Financial Projections (5-Year)</h2>

                        <Card className="border-white/10 bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle>📊 Year-wise Revenue Projection</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left p-4 font-semibold">Metric</th>
                                                <th className="text-left p-4 font-semibold">Year 1</th>
                                                <th className="text-left p-4 font-semibold">Year 2</th>
                                                <th className="text-left p-4 font-semibold">Year 3</th>
                                                <th className="text-left p-4 font-semibold">Year 4</th>
                                                <th className="text-left p-4 font-semibold">Year 5</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground">
                                            <tr className="border-b border-white/5 bg-primary/5">
                                                <td className="p-4 font-semibold text-white">Units Sold</td>
                                                <td className="p-4">250</td>
                                                <td className="p-4">750</td>
                                                <td className="p-4">1,500</td>
                                                <td className="p-4">2,500</td>
                                                <td className="p-4">4,000</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Hardware Revenue</td>
                                                <td className="p-4">₹5 Cr</td>
                                                <td className="p-4">₹15 Cr</td>
                                                <td className="p-4">₹30 Cr</td>
                                                <td className="p-4">₹50 Cr</td>
                                                <td className="p-4">₹80 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">SaaS Revenue (₹5K/month/unit)</td>
                                                <td className="p-4">₹1.5 Cr</td>
                                                <td className="p-4">₹4.5 Cr</td>
                                                <td className="p-4">₹9 Cr</td>
                                                <td className="p-4">₹15 Cr</td>
                                                <td className="p-4">₹24 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5 bg-primary/5">
                                                <td className="p-4 font-semibold text-white">Total Revenue</td>
                                                <td className="p-4 font-semibold text-white">₹6.5 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹19.5 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹39 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹65 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹104 Cr</td>
                                            </tr>
                                            <tr className="bg-chart-2/10">
                                                <td className="p-4 font-semibold text-chart-2">Net Profit (30% margin)</td>
                                                <td className="p-4 font-semibold text-chart-2">₹1.95 Cr</td>
                                                <td className="p-4 font-semibold text-chart-2">₹5.85 Cr</td>
                                                <td className="p-4 font-semibold text-chart-2">₹11.7 Cr</td>
                                                <td className="p-4 font-semibold text-chart-2">₹19.5 Cr</td>
                                                <td className="p-4 font-semibold text-chart-2">₹31.2 Cr</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>💰 Cost Structure (Per Unit)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Hardware & Sensors', value: '₹6,000' },
                                            { label: 'PCB & Assembly', value: '₹2,000' },
                                            { label: 'Case & Packaging', value: '₹800' },
                                            { label: 'Quality Testing', value: '₹500' },
                                            { label: 'Logistics', value: '₹700' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5">
                                                <span className="text-sm text-muted-foreground">{item.label}</span>
                                                <span className="text-sm font-semibold text-chart-4">{item.value}</span>
                                            </div>
                                        ))}
                                        <Separator className="my-4" />
                                        <div className="flex justify-between p-3 rounded-lg bg-primary/10 border border-primary/20">
                                            <span className="font-semibold">Total COGS</span>
                                            <span className="font-bold text-chart-4">₹10,000</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5">
                                            <span className="text-sm text-muted-foreground">Selling Price</span>
                                            <span className="font-semibold text-primary">₹20,000</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-lg bg-chart-2/10 border border-chart-2/20">
                                            <span className="font-semibold">Gross Margin</span>
                                            <span className="font-bold text-chart-2">₹10,000 (50%)</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>📈 Growth Assumptions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { label: 'Year 1 Growth', value: 'Conservative (250 units)' },
                                            { label: 'Year 2-3 Growth', value: '3x YoY (market traction)' },
                                            { label: 'Year 4-5 Growth', value: '1.5-1.7x YoY (scaling)' },
                                            { label: 'SaaS Adoption', value: '90% by Year 3' },
                                            { label: 'Market Share Target', value: '2-3% by Year 5' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5">
                                                <span className="text-sm text-muted-foreground">{item.label}</span>
                                                <span className="text-sm font-medium">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-white/10 bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle>📊 Profitability Analysis</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {[
                                        { label: 'Breakeven Point', value: 'Year 1.5 (~200 units)' },
                                        { label: 'ROI (5-year cumulative)', value: '450% on ₹5Cr initial investment' },
                                        { label: 'Payback Period', value: '18 months' },
                                        { label: '5-Year Total Revenue', value: '₹233.5 Cr' },
                                        { label: '5-Year Total Profit', value: '₹70 Cr (30% margin avg)' }
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-lg bg-muted/30 border border-white/5">
                                            <div className="text-sm text-muted-foreground mb-2">{item.label}</div>
                                            <div className="font-semibold text-chart-2">{item.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* CAPEX/OPEX TAB */}
                    <TabsContent value="capex" className="space-y-8">
                        <h2 className="text-4xl font-bold mb-8">Capital & Operating Expenditure</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>💸 Initial CAPEX (Year 0)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'R&D & Product Development', value: '₹1,50,00,000' },
                                            { label: 'Manufacturing Setup', value: '₹75,00,000' },
                                            { label: 'Quality Testing Lab', value: '₹40,00,000' },
                                            { label: 'Cloud Infrastructure Setup', value: '₹30,00,000' },
                                            { label: 'Office & Workspace', value: '₹50,00,000' },
                                            { label: 'Initial Inventory', value: '₹60,00,000' },
                                            { label: 'Legal & Certification', value: '₹25,00,000' },
                                            { label: 'Marketing & Launch', value: '₹50,00,000' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5 text-sm">
                                                <span className="text-muted-foreground">{item.label}</span>
                                                <span className="font-semibold">{item.value}</span>
                                            </div>
                                        ))}
                                        <Separator className="my-4" />
                                        <div className="flex justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                                            <span className="font-bold text-lg">Total CAPEX</span>
                                            <span className="font-bold text-lg text-primary">₹5,30,00,000</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>📋 Annual OPEX (Year 1)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Team Salaries (15 people)', value: '₹1,50,00,000' },
                                            { label: 'Cloud Hosting & Servers', value: '₹20,00,000' },
                                            { label: 'Manufacturing (COGS for 250 units)', value: '₹2,50,00,000' },
                                            { label: 'Sales & Distribution', value: '₹50,00,000' },
                                            { label: 'Marketing & Advertising', value: '₹60,00,000' },
                                            { label: 'Customer Support & Training', value: '₹30,00,000' },
                                            { label: 'Rent & Office', value: '₹24,00,000' },
                                            { label: 'Utilities & Operations', value: '₹15,00,000' },
                                            { label: 'Insurance & Compliance', value: '₹20,00,000' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5 text-sm">
                                                <span className="text-muted-foreground">{item.label}</span>
                                                <span className="font-semibold">{item.value}</span>
                                            </div>
                                        ))}
                                        <Separator className="my-4" />
                                        <div className="flex justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
                                            <span className="font-bold text-lg">Total OPEX Year 1</span>
                                            <span className="font-bold text-lg text-primary">₹6,19,00,000</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className="border-white/10 bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle>📈 OPEX Scaling (Years 1-5)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left p-4 font-semibold">Category</th>
                                                <th className="text-left p-4 font-semibold">Year 1</th>
                                                <th className="text-left p-4 font-semibold">Year 2</th>
                                                <th className="text-left p-4 font-semibold">Year 3</th>
                                                <th className="text-left p-4 font-semibold">Year 4</th>
                                                <th className="text-left p-4 font-semibold">Year 5</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground text-sm">
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Salaries</td>
                                                <td className="p-4">₹1.5 Cr</td>
                                                <td className="p-4">₹2.25 Cr</td>
                                                <td className="p-4">₹3 Cr</td>
                                                <td className="p-4">₹3.75 Cr</td>
                                                <td className="p-4">₹4.5 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Manufacturing (COGS)</td>
                                                <td className="p-4">₹2.5 Cr</td>
                                                <td className="p-4">₹7.5 Cr</td>
                                                <td className="p-4">₹15 Cr</td>
                                                <td className="p-4">₹25 Cr</td>
                                                <td className="p-4">₹40 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Cloud & Infrastructure</td>
                                                <td className="p-4">₹0.2 Cr</td>
                                                <td className="p-4">₹0.5 Cr</td>
                                                <td className="p-4">₹0.8 Cr</td>
                                                <td className="p-4">₹1.2 Cr</td>
                                                <td className="p-4">₹1.8 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Sales & Marketing</td>
                                                <td className="p-4">₹1.1 Cr</td>
                                                <td className="p-4">₹1.75 Cr</td>
                                                <td className="p-4">₹2.3 Cr</td>
                                                <td className="p-4">₹2.8 Cr</td>
                                                <td className="p-4">₹3.2 Cr</td>
                                            </tr>
                                            <tr className="border-b border-white/5">
                                                <td className="p-4">Others (Support, Ops, etc.)</td>
                                                <td className="p-4">₹0.89 Cr</td>
                                                <td className="p-4">₹1.2 Cr</td>
                                                <td className="p-4">₹1.5 Cr</td>
                                                <td className="p-4">₹1.8 Cr</td>
                                                <td className="p-4">₹2.2 Cr</td>
                                            </tr>
                                            <tr className="bg-primary/5">
                                                <td className="p-4 font-semibold text-white">Total OPEX</td>
                                                <td className="p-4 font-semibold text-white">₹6.19 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹13.2 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹22.6 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹34.55 Cr</td>
                                                <td className="p-4 font-semibold text-white">₹51.7 Cr</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-white/10 bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle>💼 Team Structure & Costs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-white/10">
                                                <th className="text-left p-4 font-semibold">Role</th>
                                                <th className="text-left p-4 font-semibold">Count</th>
                                                <th className="text-left p-4 font-semibold">Salary/Month</th>
                                                <th className="text-left p-4 font-semibold">Annual Cost</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-muted-foreground text-sm">
                                            {[
                                                { role: 'CEO/Founder', count: 1, monthly: '₹3,00,000', annual: '₹36,00,000' },
                                                { role: 'CTO/Hardware Lead', count: 1, monthly: '₹2,50,000', annual: '₹30,00,000' },
                                                { role: 'Backend Engineers', count: 2, monthly: '₹1,50,000', annual: '₹36,00,000' },
                                                { role: 'Frontend Developers', count: 1, monthly: '₹1,00,000', annual: '₹12,00,000' },
                                                { role: 'Embedded Systems Engineer', count: 1, monthly: '₹1,50,000', annual: '₹18,00,000' },
                                                { role: 'Sales Manager', count: 1, monthly: '₹1,25,000', annual: '₹15,00,000' },
                                                { role: 'Operations', count: 2, monthly: '₹75,000', annual: '₹18,00,000' },
                                                { role: 'Customer Support', count: 3, monthly: '₹50,000', annual: '₹18,00,000' }
                                            ].map((item, i) => (
                                                <tr key={i} className="border-b border-white/5">
                                                    <td className="p-4">{item.role}</td>
                                                    <td className="p-4">{item.count}</td>
                                                    <td className="p-4">{item.monthly}</td>
                                                    <td className="p-4">{item.annual}</td>
                                                </tr>
                                            ))}
                                            <tr className="bg-primary/5">
                                                <td className="p-4 font-semibold text-white">Total Headcount</td>
                                                <td className="p-4 font-semibold text-white">15</td>
                                                <td className="p-4"></td>
                                                <td className="p-4 font-semibold text-white">₹1,83,00,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* REVENUE MODEL TAB */}
                    <TabsContent value="revenue" className="space-y-8">
                        <h2 className="text-4xl font-bold mb-8">Revenue Streams & Pricing Strategy</h2>

                        <div className="grid gap-6 md:grid-cols-2">
                            {[
                                {
                                    title: '1️⃣ Hardware Sales',
                                    items: [
                                        { label: 'Product Price', value: '₹20,000 - ₹25,000', color: 'primary' },
                                        { label: 'Gross Margin', value: '50% (₹10,000 - ₹12,500)', color: 'chart-2' },
                                        { label: 'Year 1 Units', value: '250 units', color: 'default' },
                                        { label: 'Year 1 Revenue', value: '₹5 Cr', color: 'primary' },
                                        { label: 'Year 1 Gross Profit', value: '₹2.5-3.125 Cr', color: 'chart-2' }
                                    ]
                                },
                                {
                                    title: '2️⃣ SaaS/Subscription',
                                    items: [
                                        { label: 'Basic Plan', value: '₹3,000/month', color: 'primary' },
                                        { label: 'Professional Plan', value: '₹5,000/month', color: 'primary' },
                                        { label: 'Enterprise Plan', value: '₹10,000/month', color: 'primary' },
                                        { label: 'Adoption by Year 3', value: '90% of installed base', color: 'default' },
                                        { label: 'Year 3 Monthly Recurring', value: '₹75 Lakhs', color: 'primary' }
                                    ]
                                },
                                {
                                    title: '3️⃣ Consulting & Integration',
                                    items: [
                                        { label: 'Installation & Setup', value: '₹10,000 per installation', color: 'primary' },
                                        { label: 'Custom Integration', value: '₹50,000-₹2,00,000', color: 'primary' },
                                        { label: 'Training & Support', value: '₹5,000-₹25,000', color: 'primary' },
                                        { label: 'Year 1 Services Revenue', value: '₹50-75 Lakhs', color: 'primary' }
                                    ]
                                },
                                {
                                    title: '4️⃣ Data & Analytics License',
                                    items: [
                                        { label: 'Anonymized Data Licensing', value: '₹5,000-₹10,000 per month', color: 'primary' },
                                        { label: 'AI Model Training', value: '₹10,000-₹25,000 per month', color: 'primary' },
                                        { label: 'Research Partnerships', value: '₹25,000-₹1,00,000 per partner', color: 'primary' },
                                        { label: 'Year 2+ Data Revenue', value: '₹50+ Lakhs/year', color: 'primary' }
                                    ]
                                }
                            ].map((stream, idx) => (
                                <Card key={idx} className="border-white/10 bg-card/50 backdrop-blur">
                                    <CardHeader>
                                        <CardTitle>{stream.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {stream.items.map((item, i) => (
                                                <div key={i} className="flex justify-between p-3 rounded-lg bg-muted/30 border border-white/5">
                                                    <span className="text-sm text-muted-foreground">{item.label}</span>
                                                    <span className={`text-sm font-semibold ${item.color === 'primary' ? 'text-primary' :
                                                            item.color === 'chart-2' ? 'text-chart-2' :
                                                                'text-white'
                                                        }`}>{item.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="border-white/10 bg-card/50 backdrop-blur">
                            <CardHeader>
                                <CardTitle>💰 Revenue Mix by Year 5</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Hardware (75%)', value: '₹78 Cr', percent: 75, color: 'hsl(215, 16%, 47%)' },
                                        { label: 'SaaS (15%)', value: '₹15.6 Cr', percent: 15, color: 'hsl(142, 71%, 45%)' },
                                        { label: 'Services & Data (10%)', value: '₹10.4 Cr', percent: 10, color: 'hsl(262, 83%, 58%)' }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-muted-foreground">{item.label}</span>
                                                <span className="font-semibold">{item.value}</span>
                                            </div>
                                            <div className="h-8 bg-muted/30 rounded-lg overflow-hidden">
                                                <div
                                                    className="h-full rounded-lg transition-all duration-1000"
                                                    style={{ width: `${item.percent}%`, backgroundColor: item.color }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* ROADMAP TAB */}
                    <TabsContent value="roadmap" className="space-y-8">
                        <h2 className="text-4xl font-bold mb-8">Product & Business Roadmap</h2>

                        <div className="space-y-6">
                            {[
                                {
                                    phase: 'Phase 1: MVP Launch (Months 0-6)',
                                    status: 'Current',
                                    items: [
                                        'Finalize hardware design (13 sensors)',
                                        'Launch cloud dashboard (mobile + web)',
                                        'Pilot with 3-5 hospitals',
                                        'Complete FDA/ICMR certification',
                                        'Build basic SaaS infrastructure',
                                        'Cost: ₹1.5 Cr'
                                    ]
                                },
                                {
                                    phase: 'Phase 2: Market Entry (Months 6-12)',
                                    status: 'Q1 2026',
                                    items: [
                                        'Launch commercial sales (₹20K per unit)',
                                        'Target: 250 units in Year 1',
                                        'Build distributor network',
                                        'Launch SaaS plans (₹3K-₹10K/month)',
                                        'Establish customer support team',
                                        'Cost: ₹1.5 Cr'
                                    ]
                                },
                                {
                                    phase: 'Phase 3: Scale (Months 13-24)',
                                    status: 'Year 2',
                                    items: [
                                        'Expand to 750 units (3x growth)',
                                        'Launch AI-powered predictive analytics',
                                        'Partner with 50+ hospitals',
                                        'Secure ₹10-15 Cr Series A funding',
                                        'Build manufacturing partnerships',
                                        'Cost: ₹2.5 Cr'
                                    ]
                                },
                                {
                                    phase: 'Phase 4: Expansion (Months 25-36)',
                                    status: 'Year 3',
                                    items: [
                                        'Target 1,500 units (2x growth)',
                                        'Launch V2 with additional sensors',
                                        'Expand to Southeast Asia',
                                        'Government partnerships & tenders',
                                        'Break-even on operations',
                                        'Cost: ₹3.5 Cr'
                                    ]
                                },
                                {
                                    phase: 'Phase 5: Profitability (Months 37-60)',
                                    status: 'Year 4-5',
                                    items: [
                                        'Reach 2,500-4,000 units/year',
                                        '100% SaaS adoption from installed base',
                                        'International expansion (Middle East, Africa)',
                                        'Build strategic partnerships with major hospital chains',
                                        'Target: ₹100+ Cr revenue by Year 5',
                                        'Prepare for Series B or IPO'
                                    ]
                                }
                            ].map((phase, idx) => (
                                <Card key={idx} className="border-white/10 bg-card/50 backdrop-blur relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
                                    <CardHeader>
                                        <div className="flex justify-between items-start flex-wrap gap-4">
                                            <CardTitle className="text-xl">{phase.phase}</CardTitle>
                                            <Badge className="bg-primary/20 text-primary border-primary/50">{phase.status}</Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {phase.items.map((item, i) => (
                                                <li key={i} className="flex gap-3 text-muted-foreground">
                                                    <span className="text-chart-2 mt-1">✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>🎯 Key Milestones</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            'FDA/ICMR Certification (6 months)',
                                            'First 100 units sold (12 months)',
                                            'Break-even (18 months)',
                                            '₹10 Cr revenue (30 months)',
                                            'Series A Funding (24 months)',
                                            'International Launch (36 months)'
                                        ].map((milestone, i) => (
                                            <div key={i} className="flex gap-3 p-3 rounded-lg bg-muted/30 border border-white/5">
                                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-2/20 flex items-center justify-center text-chart-2 text-sm font-bold">
                                                    ✓
                                                </div>
                                                <span className="text-sm text-muted-foreground">{milestone}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-white/10 bg-card/50 backdrop-blur">
                                <CardHeader>
                                    <CardTitle>💵 Funding Requirements</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {[
                                            { label: 'Seed Round (Year 0)', value: '₹5 Cr' },
                                            { label: 'Series A (Year 2)', value: '₹15 Cr' },
                                            { label: 'Series B (Year 4)', value: '₹30 Cr' },
                                            { label: 'Total Funding', value: '₹50 Cr (5-year plan)' }
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between p-4 rounded-lg bg-muted/30 border border-white/5">
                                                <span className="text-sm text-muted-foreground">{item.label}</span>
                                                <span className="font-bold text-primary">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </main>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/95 backdrop-blur py-8 mt-16">
                <div className="container mx-auto px-6 text-center text-sm text-muted-foreground space-y-2">
                    <p>©️ 2025 Arogya Cube | Confidential Business Model</p>
                    <p>This document contains proprietary and confidential information.</p>
                </div>
            </footer>
        </div>
    );
}
