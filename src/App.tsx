import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card } from "./components/ui/card";
import { BarChart3, Calculator, Network, Brain, Grid3x3, MessageCircle, Info } from "lucide-react";
import StatisticsSection from "./components/StatisticsSection";
import PCASection from "./components/PCASection";
import KohonenSection from "./components/KohonenSection";
import ACMSection from "./components/ACMSection";
import StatisticalChatbot from "./components/StatisticalChatbot";
import ThemeToggle from "./components/ThemeToggle";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { useRef, createContext, useContext } from "react";

// Create context for section functions
interface SectionFunctions {
  triggerStatisticsCalculation: () => void;
  triggerPCACalculation: () => void;
  triggerACMCalculation: () => void;
  triggerKohonenCalculation: () => void;
}

export const SectionFunctionsContext = createContext<SectionFunctions | null>(null);

export default function App() {
  // Refs for section components
  const statisticsSectionRef = useRef<{ calculateStatistics: () => void }>(null);
  const pcaSectionRef = useRef<{ performFullACP: () => void }>(null);
  const acmSectionRef = useRef<{ performACM: () => void }>(null);
  const kohonenSectionRef = useRef<{ trainKohonen: () => void }>(null);
  
  // Functions to trigger calculations in each section
  const triggerStatisticsCalculation = () => {
    if (statisticsSectionRef.current) {
      statisticsSectionRef.current.calculateStatistics();
    }
  };
  
  const triggerPCACalculation = () => {
    if (pcaSectionRef.current) {
      pcaSectionRef.current.performFullACP();
    }
  };
  
  const triggerACMCalculation = () => {
    if (acmSectionRef.current) {
      acmSectionRef.current.performACM();
    }
  };
  
  const triggerKohonenCalculation = () => {
    if (kohonenSectionRef.current) {
      kohonenSectionRef.current.trainKohonen();
    }
  };
  
  const sectionFunctions: SectionFunctions = {
    triggerStatisticsCalculation,
    triggerPCACalculation,
    triggerACMCalculation,
    triggerKohonenCalculation
  };
  
  return (
    <SectionFunctionsContext.Provider value={sectionFunctions}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 pb-20 transition-colors">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
        <div className="mb-8 text-center relative">
          <div className="absolute right-0 top-0 flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Info className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-500" />
                    À propos de cette application
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 rounded-full">
                      <Calculator className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Plateforme d'Analyse Statistique</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Version 1.0</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Développeur</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      <span className="font-medium">Benaboud Roqia</span>
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Étudiante en Master Intelligence Artificielle et Science des Données. 
                      Passionnée par l'apprentissage automatique, l'analyse avancée des données 
                      et le développement de solutions intelligentes.
                    </p>
                  </div>
                  
                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">Fonctionnalités</h4>
                    <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Analyse statistique descriptive</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Analyse en Composantes Principales (ACP)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Analyse des Correspondances Multiples (ACM)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Cartes Auto-Organisatrices de Kohonen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>•</span>
                        <span>Assistant IA intégré</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-xs text-slate-500 dark:text-slate-400 text-center pt-2 border-t border-slate-200 dark:border-slate-700">
                    © 2025 Benaboud Roqia - Tous droits réservés
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calculator className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            <h1 className="text-slate-900 dark:text-white">DataVista - Plateforme d'Analyse Statistique</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-300">
            Analyse statistique professionnelle - Descriptive & ACP & ACM & Kohonen
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="statistics" className="w-full">
          <TabsList className="flex w-full max-w-6xl mx-auto justify-between mb-8 gap-2">
            <TabsTrigger value="statistics" className="flex-1 flex items-center justify-center gap-2 py-3">
              <BarChart3 className="w-4 h-4" />
              Statistiques Descriptives
            </TabsTrigger>
            <TabsTrigger value="pca" className="flex-1 flex items-center justify-center gap-2 py-3">
              <Network className="w-4 h-4" />
              Analyse ACP
            </TabsTrigger>
            <TabsTrigger value="acm" className="flex-1 flex items-center justify-center gap-2 py-3">
              <Grid3x3 className="w-4 h-4" />
              Analyse ACM
            </TabsTrigger>
            <TabsTrigger value="kohonen" className="flex-1 flex items-center justify-center gap-2 py-3">
              <Brain className="w-4 h-4" />
              Réseaux de Kohonen
            </TabsTrigger>
            <TabsTrigger value="chatbot" className="flex-1 flex items-center justify-center gap-2 py-3">
              <MessageCircle className="w-4 h-4" />
              Assistant IA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="statistics">
            <StatisticsSection ref={statisticsSectionRef} />
          </TabsContent>

          <TabsContent value="pca">
            <PCASection ref={pcaSectionRef} />
          </TabsContent>

          <TabsContent value="acm">
            <ACMSection ref={acmSectionRef} />
          </TabsContent>

          <TabsContent value="kohonen">
            <KohonenSection ref={kohonenSectionRef} />
          </TabsContent>

          <TabsContent value="chatbot">
            <StatisticalChatbot />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </SectionFunctionsContext.Provider>
  );
}