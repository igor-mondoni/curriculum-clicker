"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import { initialAssets, initialSections, playerStatus, initialSpecialUpgrades, resumeData } from "../data/data";
import { Asset, Sections, Section, PlayerStatus, SpecialUpgrade } from "../interface/types";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface StatsBarProps {
  devPoints: number;
  pointsPerSecond: number;
  onHack: () => void;
}

interface PurchasePanelProps {
    assets: Asset[];
    upgrades: SpecialUpgrade[];
    devPoints: number;
    onBuyAsset: (id: number) => void;
    onBuySpecialUpgrade: (id: number) => void;
}

interface ClickerPanelProps {
  onManualClick: () => void;
  clickpower: number;
}

interface ResumeSectionProps {
  sectionKey: string;
  sectionData: Section;
  devPoints: number;
  onUnlockSection: (key: string) => void;
}

interface ActionButtonsPanelProps {
    actions: {
        print: { unlocked: boolean; cost: number };
        email: { unlocked: boolean; cost: number };
    };
    devPoints: number;
    onUnlockAction: (action: 'print' | 'email') => void;
}

function Header() {
    const { name, title, location, email, linkedin, github } = resumeData;

    return (
        <header id="home" className={styles.header}>
            <div className={styles.textContainer}>
                <h1 className={styles.name}>
                    {name}
                </h1>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <p className={styles.location}>
                    {location}
                </p>
                <div className={styles.socialLinks}>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaLinkedin size={28} />
                    </a>
                    <a href={github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                        <FaGithub size={28} />
                    </a>
                    <a href={`mailto:${email}`} className={styles.socialIcon}>
                        <FaEnvelope size={28} />
                    </a>
                </div>
            </div>
        </header>
    );
}

function StatsBar({ devPoints, pointsPerSecond, onHack }: StatsBarProps) {
  return (
    <div className={styles.statsBar}>
      <div>
        <h1 className={styles.statsBarPoints}>
          {Math.floor(devPoints).toLocaleString()} DevPoints
        </h1>
        <p className={styles.statsBarPps}>{pointsPerSecond.toLocaleString()} DP/s</p>
      </div>
      <button onClick={onHack} className={styles.hackButton}>
        hack("desbloquear tudo")
      </button>
    </div>
  );
}

function PurchasePanel({ assets, upgrades, devPoints, onBuyAsset, onBuySpecialUpgrade }: PurchasePanelProps) {
    const [activeTab, setActiveTab] = useState<'assets' | 'upgrades'>('assets');

    return (
        <aside className={styles.panel}>
            <div className={styles.tabContainer}>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'assets' ? styles.activeTab : ''}`} 
                    onClick={() => setActiveTab('assets')}>
                    Ativos
                </button>
                <button 
                    className={`${styles.tabButton} ${activeTab === 'upgrades' ? styles.activeTab : ''}`} 
                    onClick={() => setActiveTab('upgrades')}>
                    Upgrades
                </button>
            </div>

            <div className={styles.tabContent}>
                {activeTab === 'assets' && (
                    <div>
                        {(assets || []).map((a) => (
                            <button key={a.id} onClick={() => onBuyAsset(a.id)} disabled={devPoints < a.devPointsCost} className={styles.upgradeButton}>
                                <div className={styles.upgradeInfo}>
                                    <img src={a.image} alt={`Ícone de ${a.name}`} style={{ width: '40px', height: '40px', marginRight: '1rem', borderRadius: '0.25rem' }} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/f00/fff?text=Error' }} />
                                    <div style={{ flexGrow: 1 }}>
                                        <p className={styles.upgradeName}>{a.name}</p>
                                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.75rem' }}>
                                            <p className={styles.upgradePps}>+{a.pps} DP/s</p>
                                            {a.clickpower > 0 && (
                                                <>
                                                    <span style={{ color: '#475569' }}>|</span>
                                                    <p className={styles.upgradePps} style={{ color: '#6ee7b7' }}>+{a.clickpower.toFixed(1)}/clique</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <p className={styles.upgradeCost}>{a.devPointsCost.toLocaleString()} DP</p>
                                        <p className={styles.upgradeOwned}>Possui: {a.owned}</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {activeTab === 'upgrades' && (
                    <div>
                        {(upgrades || []).map((u) => (
                            <button key={u.id} onClick={() => onBuySpecialUpgrade(u.id)} disabled={devPoints < u.cost} className={styles.upgradeButton}>
                                <div className={styles.upgradeInfo}>
                                    <img src={u.image} alt={`Ícone de ${u.name}`} style={{ width: '40px', height: '40px', marginRight: '1rem', borderRadius: '0.25rem' }} onError={(e) => { e.currentTarget.src = 'https://placehold.co/40x40/f00/fff?text=Error' }} />
                                    <div style={{ flexGrow: 1 }}>
                                        <p className={styles.upgradeName}>{u.name}</p>
                                        <p className={styles.upgradePps} style={{ color: '#6ee7b7' }}>
                                            {u.type === 'clickpower' ? `+${u.value * 100}% /clique` : `+${u.value * 100}% DP/s`}
                                        </p>
                                    </div>
                                    <div style={{ textAlign: "right" }}>
                                        <p className={styles.upgradeCost}>{u.cost.toLocaleString()} DP</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </aside>
    );
}


function ClickerPanel({ onManualClick, clickpower }: ClickerPanelProps) {
  return (
    <div className={styles.clickerPanel}>
      <h2 className={styles.panelTitle}>Escrever Código</h2>
      <button
        onClick={onManualClick}
        className={styles.clickerButton}
      >
        +{clickpower.toFixed(1)} DP
      </button>
    </div>
  );
}

function ResumeSection({ sectionKey, sectionData, devPoints, onUnlockSection }: ResumeSectionProps) {
    const { Component } = sectionData;
    return sectionData.unlocked ? (
        <div key={sectionKey} className="animate-fade-in">
            <Component />
        </div>
    ) : (
        <div key={sectionKey} className={styles.lockedSection}>
            <h3 className={styles.lockedSectionTitle}>
                Seção "{sectionData.title}" Bloqueada
            </h3>
            <button
                onClick={() => onUnlockSection(sectionKey)}
                disabled={devPoints < sectionData.cost}
                className={styles.unlockButton}
            >
                Desbloquear ({sectionData.cost.toLocaleString()} DP)
            </button>
        </div>
    );
}

function ActionButtonsPanel({ actions, devPoints, onUnlockAction }: ActionButtonsPanelProps) {
    return (
        <div className={styles.panel} style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {actions.print.unlocked ? (
                <button className={styles.actionButton} onClick={() => window.print()}>Imprimir Currículo</button>
            ) : (
                <button className={styles.unlockButton} disabled={devPoints < actions.print.cost} onClick={() => onUnlockAction('print')}>
                    Desbloquear Impressão ({actions.print.cost.toLocaleString()} DP)
                </button>
            )}

            {actions.email.unlocked ? (
                 <button className={styles.actionButton} onClick={() => window.location.href = 'mailto:igor.hm17@hotmail.com'}>Entrar em Contato</button>
            ) : (
                <button className={styles.unlockButton} disabled={devPoints < actions.email.cost} onClick={() => onUnlockAction('email')}>
                    Desbloquear Contato ({actions.email.cost.toLocaleString()} DP)
                </button>
            )}
        </div>
    );
}

export default function App() {
  const [status, setStatus] = useState<PlayerStatus>(playerStatus[0]);
  const [assets, setAssets] = useState<Asset[]>(initialAssets);
  const [sections, setSections] = useState<Sections>(initialSections);
  const [specialUpgrades, setSpecialUpgrades] = useState<SpecialUpgrade[]>(initialSpecialUpgrades);
  const [bonusMessage, setBonusMessage] = useState<string>("");
  const [finalActions, setFinalActions] = useState({
      print: { unlocked: false, cost: 10000000 },
      email: { unlocked: false, cost: 25000000 }
  });

  const allSectionsUnlocked = Object.values(sections).every(s => s.unlocked);

  useEffect(() => {
    if (status.pointsPerSecond === 0) return;
    const gameLoop = setInterval(() => {
      setStatus(currentStatus => ({
        ...currentStatus,
        devPointsOwned: currentStatus.devPointsOwned + (currentStatus.pointsPerSecond / 10)
      }));
    }, 100);
    return () => clearInterval(gameLoop);
  }, [status.pointsPerSecond]);

  useEffect(() => {
    if (bonusMessage) {
      const timer = setTimeout(() => {
        setBonusMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [bonusMessage]);

  const handleManualClick = () => {
    setStatus(currentStatus => {
      let bonus = 0;
      const newClickedTimes = currentStatus.clickedTimes + 1;

      if (newClickedTimes > 0 && newClickedTimes % 100 === 0) {
        bonus = currentStatus.pointsPerSecond * 0.10 + 100;
        setBonusMessage(`+${Math.floor(bonus)} DP de bônus por produtividade!`);
      }
     if (newClickedTimes > 0 && newClickedTimes % 1000 === 0) {
        bonus = currentStatus.pointsPerSecond * 1.00 + 1000;
        setBonusMessage(`+${Math.floor(bonus)} DP de bônus por produtividade!`);
      }
           if (newClickedTimes > 0 && newClickedTimes % 10000 === 0) {
        bonus = currentStatus.pointsPerSecond * 5.00 + 10000;
        setBonusMessage(`+${Math.floor(bonus)} DP de bônus por produtividade!`);
      }
           if (newClickedTimes > 0 && newClickedTimes % 100000 === 0) {
        bonus = currentStatus.pointsPerSecond * 10.00 + 50000;
        setBonusMessage(`+${Math.floor(bonus)} DP de bônus por produtividade!`);
      }
      return {
        ...currentStatus,
        devPointsOwned: currentStatus.devPointsOwned + currentStatus.clickpower + bonus,
        clickedTimes: newClickedTimes,
      };
    });
  };

  const handleBuyAsset = (assetId: number) => {
    const assetIndex = assets.findIndex((a) => a.id === assetId);
    if (assetIndex === -1) return;
    const asset = assets[assetIndex];

    if (asset && status.devPointsOwned >= asset.devPointsCost) {
      setStatus(currentStatus => ({
        ...currentStatus,
        devPointsOwned: currentStatus.devPointsOwned - asset.devPointsCost,
        pointsPerSecond: currentStatus.pointsPerSecond + asset.pps,
        clickpower: currentStatus.clickpower + (asset.clickpower || 0),
      }));

      setAssets(currentAssets => currentAssets.map((a, index) => {
          if (index === assetIndex) {
            return {
              ...a,
              owned: a.owned + 1,
              devPointsCost: Math.floor(a.devPointsCost * 1.15),
              clickpower: (a.clickpower || 0) * 1.1 
            };
          }
          return a;
      }));
    }
  };

  const handleBuySpecialUpgrade = (upgradeId: number) => {
    const upgrade = specialUpgrades.find(u => u.id === upgradeId);
    if (upgrade && status.devPointsOwned >= upgrade.cost) {
        setStatus(currentStatus => {
            const newClickpower = upgrade.type === 'clickpower' ? currentStatus.clickpower * (1 + upgrade.value) : currentStatus.clickpower;
            const newPps = upgrade.type === 'pps' ? (currentStatus.pointsPerSecond || 1) * (1 + upgrade.value) : currentStatus.pointsPerSecond;
            return {
                ...currentStatus,
                devPointsOwned: currentStatus.devPointsOwned - upgrade.cost,
                clickpower: newClickpower,
                pointsPerSecond: newPps,
            };
        });
        setSpecialUpgrades(currentUpgrades => currentUpgrades.map(u => u.id === upgradeId ? { ...u, cost: Math.floor(u.cost * 1.8) } : u));
    }
  };

  const handleUnlockSection = (sectionKey: string) => {
    const section = sections[sectionKey];
    if (status.devPointsOwned >= section.cost) {
      setStatus(currentStatus => ({ ...currentStatus, devPointsOwned: currentStatus.devPointsOwned - section.cost }));
      setSections((prevSections) => ({ ...prevSections, [sectionKey]: { ...section, unlocked: true } }));
    }
  };

  const handleUnlockAction = (action: 'print' | 'email') => {
      const actionToUnlock = finalActions[action];
      if (status.devPointsOwned >= actionToUnlock.cost) {
          setStatus(currentStatus => ({ ...currentStatus, devPointsOwned: currentStatus.devPointsOwned - actionToUnlock.cost }));
          setFinalActions(prevActions => ({ ...prevActions, [action]: { ...actionToUnlock, unlocked: true } }));
      }
  };
 const handleHack = () => {
    if (window.confirm("Você tem certeza que deseja desbloquear tudo?")) {
      setStatus(currentStatus => ({ ...currentStatus, devPointsOwned: 9999999 }));
      
      const unlockedSections: Sections = { ...sections };
      for (const key in unlockedSections) {
        unlockedSections[key as keyof typeof sections].unlocked = true;
      }
      setSections(unlockedSections);
      
      setFinalActions({
        print: { unlocked: true, cost: 0 },
        email: { unlocked: true, cost: 0 }
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.gameInterface}>
        <StatsBar 
          devPoints={status.devPointsOwned} 
          pointsPerSecond={status.pointsPerSecond} 
          onHack={handleHack} 
        />

        <div className={styles.gameLayout}>
          <div className={styles.sidePanels}>
              <PurchasePanel
                assets={assets}
                upgrades={specialUpgrades}
                devPoints={status.devPointsOwned}
                onBuyAsset={handleBuyAsset}
                onBuySpecialUpgrade={handleBuySpecialUpgrade}
              />
          </div>

          <main className={styles.mainColumn}>
            <ClickerPanel
              onManualClick={handleManualClick}
              clickpower={status.clickpower}
            />
            {bonusMessage && (
              <div className={styles.bonusMessage}>
                {bonusMessage}
              </div>
            )}
            
            {Object.entries(sections).map(([key, sectionData]) => (
                <ResumeSection
                    key={key}
                    sectionKey={key}
                    sectionData={sectionData}
                    devPoints={status.devPointsOwned}
                    onUnlockSection={handleUnlockSection}
                />
            ))}

            {allSectionsUnlocked && (
                <ActionButtonsPanel
                  actions={finalActions}
                  devPoints={status.devPointsOwned}
                  onUnlockAction={handleUnlockAction}
                />
            )}
          </main>
        </div>
      </div>

      <div className={styles.printableResume}>
        {Object.entries(sections).map(([key, sectionData]) => {
            if (sectionData.unlocked) {
                const { Component } = sectionData;
                return <Component key={`print-${key}`} />;
            }
            return null;
        })}
      </div>
    </div>
  );
}