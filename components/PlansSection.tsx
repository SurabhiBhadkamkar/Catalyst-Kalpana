import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import * as PricingCard from '@/components/ui/pricing-card';
import {
	CheckCircle2,
	XCircleIcon,
	Users,
	Sparkles,
	Building2,
} from 'lucide-react';

export default function PlansSection() {
	const handleClick = (plan: string) => {
		alert(`Selected ${plan} plan!`);
	};

	const starterFeatures = [
		'Up to 3 projects',
		'Basic templates',
		'Community support',
		'1GB storage',
	];

	const starterLockedFeatures = [
		'Unlimited projects',
		'Premium templates',
		'Priority support',
	];

	const proFeatures = [
		'Unlimited projects',
		'Premium templates',
		'Priority support',
		'10GB storage',
		'Custom branding',
		'Lead intake workflow',
	];

	const proLockedFeatures = [
		'Dedicated developer help',
		'Custom domain setup support',
	];

	const enterpriseFeatures = [
		'Unlimited everything',
		'All templates & custom builds',
		'24/7 dedicated developer',
		'100GB storage',
		'Full white-label solution',
		'API Access & integrations',
		'Custom domain support',
	];

	return (
		<section className="relative w-full min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8 overflow-y-auto">
			{/* Subtle dotted grid background */}
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 z-0"
				style={{
					backgroundImage:
						'radial-gradient(rgba(255,255,255,0.08) 0.8px, transparent 0.8px)',
					backgroundSize: '14px 14px',
					maskImage:
						'radial-gradient(circle at 50% 10%, rgba(0,0,0,1), rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
				}}
			/>

			{/* Radial spotlight */}
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-1/4 left-1/2 h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full z-0',
					'bg-[radial-gradient(ellipse_at_center,rgba(232,112,42,0.12),transparent_50%)]',
					'blur-[40px]',
				)}
			/>

			<div className="max-w-6xl mx-auto flex flex-col items-center gap-12 relative z-10">
				{/* Top Header Text */}
				<div className="text-center flex flex-col gap-3 max-w-xl mx-auto">
					<span className="text-[10px] tracking-[0.3em] font-mono font-semibold text-[#e8702a] uppercase">
						MEMBERSHIP PLANS
					</span>
					<h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-white">
						Flexible Pricing for Creators
					</h2>
					<p className="text-white/50 text-sm font-light leading-relaxed">
						Choose a plan that matches your scale. Unlock premium templates, bento configurations, and immediate launch sequences.
					</p>
				</div>

				{/* 3-Column Pricing Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-start justify-center max-w-5xl">
					
					{/* Starter Plan */}
					<div className="bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-1 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50">
						<PricingCard.Card className="border-0 bg-transparent shadow-none max-w-full">
							<PricingCard.Header className="bg-neutral-950/40 border-white/5 rounded-xl">
								<PricingCard.Plan>
									<PricingCard.PlanName>
										<Users className="text-white/60 h-4 w-4" aria-hidden="true" />
										<span className="text-white/80 font-medium">Starter</span>
									</PricingCard.PlanName>
									<PricingCard.Badge className="border-white/10 text-white/70 bg-white/5">For Individuals</PricingCard.Badge>
								</PricingCard.Plan>
								<PricingCard.Price>
									<PricingCard.MainPrice className="text-white">$xx</PricingCard.MainPrice>
									<PricingCard.Period className="text-white/60">/ month</PricingCard.Period>
									<PricingCard.OriginalPrice className="ml-auto text-white/40">
										$xx
									</PricingCard.OriginalPrice>
								</PricingCard.Price>
								<Button
									className={cn(
										'w-full font-semibold text-white cursor-pointer py-2 px-4 rounded-lg',
										'bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-850 border border-white/10 shadow-lg',
									)}
									onClick={() => handleClick('Starter')}
								>
									Get Started
								</Button>
							</PricingCard.Header>
							<PricingCard.Body>
								<PricingCard.List>
									{starterFeatures.map((item, idx) => (
										<PricingCard.ListItem key={idx} className="text-white/70">
											<span className="mt-0.5">
												<CheckCircle2
													className="h-4 w-4 text-green-500 shrink-0"
													aria-hidden="true"
												/>
											</span>
											<span>{item}</span>
										</PricingCard.ListItem>
									))}
								</PricingCard.List>
								<PricingCard.Separator className="text-white/40 border-white/10">Pro features</PricingCard.Separator>
								<PricingCard.List>
									{starterLockedFeatures.map((item, idx) => (
										<PricingCard.ListItem key={idx} className="opacity-50 text-white/70">
											<span className="mt-0.5">
												<XCircleIcon
													className="text-red-500/80 h-4 w-4 shrink-0"
													aria-hidden="true"
												/>
											</span>
											<span>{item}</span>
										</PricingCard.ListItem>
									))}
								</PricingCard.List>
							</PricingCard.Body>
						</PricingCard.Card>
					</div>

					{/* Pro Plan (Highlighted) */}
					<div className="bg-neutral-900/60 backdrop-blur-md rounded-2xl border border-[#e8702a]/30 p-1 relative shadow-2xl shadow-[#e8702a]/5 transform md:-translate-y-2 transition-all duration-300 hover:border-[#e8702a]/50">
						{/* Top tag */}
						<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8702a] to-orange-600 text-white text-[9px] font-mono tracking-widest font-bold px-3 py-1 rounded-full uppercase shadow-md shadow-orange-500/20">
							MOST POPULAR
						</div>
						<PricingCard.Card className="border-0 bg-transparent shadow-none max-w-full">
							<PricingCard.Header className="bg-neutral-950/60 border-[#e8702a]/10 rounded-xl">
								<PricingCard.Plan>
									<PricingCard.PlanName>
										<Sparkles className="text-[#e8702a] h-4 w-4" aria-hidden="true" />
										<span className="text-white font-semibold">Pro</span>
									</PricingCard.PlanName>
									<PricingCard.Badge className="border-[#e8702a]/30 text-[#e8702a] bg-[#e8702a]/10">Best Value</PricingCard.Badge>
								</PricingCard.Plan>
								<PricingCard.Price>
									<PricingCard.MainPrice className="text-white">$xx</PricingCard.MainPrice>
									<PricingCard.Period className="text-white/60">/ month</PricingCard.Period>
									<PricingCard.OriginalPrice className="ml-auto text-white/40">
										$xx
									</PricingCard.OriginalPrice>
								</PricingCard.Price>
								<Button
									className={cn(
										'w-full font-semibold text-white cursor-pointer py-2 px-4 rounded-lg',
										'bg-gradient-to-b from-[#e8702a] to-orange-600 hover:from-[#f37a34] hover:to-orange-700 shadow-[0_10px_25px_rgba(232,112,42,0.25)] border border-[#e8702a]/20',
									)}
									onClick={() => handleClick('Pro')}
								>
									Upgrade to Pro
								</Button>
							</PricingCard.Header>
							<PricingCard.Body>
								<PricingCard.List>
									{proFeatures.map((item, idx) => (
										<PricingCard.ListItem key={idx} className="text-white/80">
											<span className="mt-0.5">
												<CheckCircle2
													className="h-4 w-4 text-green-500 shrink-0"
													aria-hidden="true"
												/>
											</span>
											<span>{item}</span>
										</PricingCard.ListItem>
									))}
								</PricingCard.List>
								<PricingCard.Separator className="text-white/40 border-white/10">Enterprise tier</PricingCard.Separator>
								<PricingCard.List>
									{proLockedFeatures.map((item, idx) => (
										<PricingCard.ListItem key={idx} className="opacity-50 text-white/70">
											<span className="mt-0.5">
												<XCircleIcon
													className="text-red-500/80 h-4 w-4 shrink-0"
													aria-hidden="true"
												/>
											</span>
											<span>{item}</span>
										</PricingCard.ListItem>
									))}
								</PricingCard.List>
							</PricingCard.Body>
						</PricingCard.Card>
					</div>

					{/* Enterprise Plan */}
					<div className="bg-neutral-900/40 backdrop-blur-md rounded-2xl border border-white/5 p-1 transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/50">
						<PricingCard.Card className="border-0 bg-transparent shadow-none max-w-full">
							<PricingCard.Header className="bg-neutral-950/40 border-white/5 rounded-xl">
								<PricingCard.Plan>
									<PricingCard.PlanName>
										<Building2 className="text-white/60 h-4 w-4" aria-hidden="true" />
										<span className="text-white/80 font-medium">Enterprise</span>
									</PricingCard.PlanName>
									<PricingCard.Badge className="border-white/10 text-white/70 bg-white/5">For Agencies</PricingCard.Badge>
								</PricingCard.Plan>
								<PricingCard.Price>
									<PricingCard.MainPrice className="text-white">$xx</PricingCard.MainPrice>
									<PricingCard.Period className="text-white/60">/ month</PricingCard.Period>
									<PricingCard.OriginalPrice className="ml-auto text-white/40">
										$xx
									</PricingCard.OriginalPrice>
								</PricingCard.Price>
								<Button
									className={cn(
										'w-full font-semibold text-white cursor-pointer py-2 px-4 rounded-lg',
										'bg-gradient-to-b from-neutral-800 to-neutral-900 hover:from-neutral-700 hover:to-neutral-850 border border-white/10 shadow-lg',
									)}
									onClick={() => handleClick('Enterprise')}
								>
									Contact Sales
								</Button>
							</PricingCard.Header>
							<PricingCard.Body>
								<PricingCard.List>
									{enterpriseFeatures.map((item, idx) => (
										<PricingCard.ListItem key={idx} className="text-white/70">
											<span className="mt-0.5">
												<CheckCircle2
													className="h-4 w-4 text-green-500 shrink-0"
													aria-hidden="true"
												/>
											</span>
											<span>{item}</span>
										</PricingCard.ListItem>
									))}
								</PricingCard.List>
							</PricingCard.Body>
						</PricingCard.Card>
					</div>

				</div>

				{/* Trust Badges / Footer Info */}
				<div className="flex flex-col items-center gap-2 text-center text-xs text-white/40 mt-4 max-w-md">
					<p>🛡️ All payments are securely encrypted. Cancel subscription at any time with a single click.</p>
					<p>Need custom development services? Reach out directly via the Contact tab.</p>
				</div>
			</div>
		</section>
	);
}
