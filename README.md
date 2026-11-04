# 10 Challenges JavaScript — Plan de renforcement Sprint 2

**YouCode — Sprint 02**  
**Public cible :** apprenants débutants rencontrant des difficultés importantes en JavaScript.  
**Progression :** débutant → intermédiaire  
**Durée estimée :** 6 h 15 de pratique (hors débriefs et accompagnement).

## Présentation

Ce parcours propose **10 challenges progressifs** pour consolider les bases de JavaScript et les réinvestir dans de petites applications Web.

L'objectif est de développer l'autonomie : **chercher → tester → corriger → expliquer → améliorer**. Les solutions complètes ne sont pas fournies.

## Objectifs pédagogiques

À l'issue du parcours, tu dois être capable de :

- Utiliser les variables, conditions, boucles et fonctions.
- Manipuler des tableaux et des tableaux d'objets.
- Utiliser les méthodes ES6+ (`map`, `filter`, `find`, `reduce`).
- Sélectionner des éléments HTML et gérer les événements.
- Générer des éléments HTML depuis JavaScript.
- Ajouter, modifier et supprimer des éléments dynamiquement.
- Modifier des classes Tailwind CSS avec JavaScript.
- Utiliser `localStorage` pour conserver des données et réaliser un CRUD simple.

## Palier 1 — Logique JavaScript (1 h 45)

### Challenge 01 — Calculateur de panier

**Durée :** 20 minutes  
**Notions :** variables, conditions, boucles, calculs.

**Mission :** Une boutique possède trois produits, chacun avec un prix et une quantité. Calcule le total du panier. Si le total dépasse **500 DH**, applique une réduction de **10 %**, puis affiche le montant final.

**Résultat attendu :** le montant final est correct avec ou sans réduction.

### Challenge 02 — Analyseur de notes

**Durée :** 25 minutes  
**Notions :** tableaux, boucles, fonctions.

**Mission :** À partir d'un tableau de notes, crée des fonctions pour :

- Calculer la moyenne.
- Identifier la meilleure note.
- Compter les notes supérieures ou égales à 10.
- Déterminer si la moyenne de la classe est supérieure ou égale à 10.

**Résultat attendu :** un bilan clair dans la console.

### Challenge 03 — Gestion des apprenants

**Durée :** 30 minutes  
**Notions :** objets, tableaux d'objets, fonctions.

**Mission :** Crée un tableau de cinq apprenants avec les propriétés `id`, `nom`, `age` et `note`. Permets ensuite de :

- Ajouter un apprenant.
- Modifier sa note à partir de son ID.
- Supprimer un apprenant.
- Rechercher un apprenant par son nom.

**Résultat attendu :** le tableau est correctement mis à jour après chaque opération.

### Challenge 04 — Catalogue intelligent

**Durée :** 30 minutes  
**Notions :** `filter`, `find`, `map`, `reduce`.

**Mission :** Une boutique possède six produits avec un ID, un nom, un prix et une catégorie. Réalise les traitements suivants :

- Récupérer les produits à moins de **200 DH**.
- Rechercher un produit par son ID.
- Générer un tableau contenant uniquement les noms.
- Calculer la somme des prix de tous les produits.

**Résultat attendu :** quatre traitements fonctionnels à partir du même tableau.

## Palier 2 — DOM et interactivité (2 h 10)

### Challenge 05 — Compteur interactif

**Durée :** 25 minutes  
**Notions :** sélecteurs DOM, événements, conditions.

**Mission :** Crée un compteur avec trois boutons : **Augmenter**, **Diminuer** et **Réinitialiser**. Le compteur ne doit jamais être négatif. Change sa couleur lorsqu'il atteint **10**.

**Résultat attendu :** une interface réactive sans rechargement de la page.

### Challenge 06 — Générateur de cartes

**Durée :** 35 minutes  
**Notions :** tableaux d'objets, DOM, `innerHTML`.

**Mission :** À partir d'un tableau d'objets contenant des livres, affiche dynamiquement une carte HTML pour chaque livre avec son titre, son auteur et son prix. Affiche aussi le nombre total de livres.

**Résultat attendu :** les cartes sont générées depuis JavaScript, sans duplication manuelle du HTML.

### Challenge 07 — Liste de courses interactive

**Durée :** 40 minutes  
**Notions :** formulaires, événements, ajout et suppression d'éléments.

**Mission :** Crée un champ de saisie et un bouton pour ajouter des articles à une liste. Chaque article doit pouvoir être supprimé ou marqué comme acheté. Empêche l'ajout d'un article vide.

**Résultat attendu :** la liste réagit correctement aux actions de l'utilisateur.

### Challenge 08 — Gestionnaire de thèmes

**Durée :** 30 minutes  
**Notions :** `classList`, Tailwind CSS, événements.

**Mission :** Crée une carte de profil et trois boutons de couleur. Chaque bouton modifie l'apparence de la carte en ajoutant ou retirant des classes Tailwind CSS. Ajoute un bouton pour afficher ou masquer les informations du profil.

**Résultat attendu :** les styles et la visibilité changent dynamiquement.

## Palier 3 — Applications CRUD (2 h 20)

### Challenge 09 — Gestionnaire de tâches

**Durée :** 50 minutes  
**Notions :** CRUD, tableaux d'objets, DOM, `localStorage`.

**Mission :** Développe une application permettant d'ajouter, modifier, supprimer et terminer des tâches. Chaque tâche possède un ID, un titre et un statut. Enregistre les tâches dans `localStorage`.

**Résultat attendu :** les tâches restent disponibles après le rechargement de la page.

### Challenge 10 — Mini-projet : Carnet de contacts

**Durée :** 90 minutes  
**Notions :** CRUD, ES6+, DOM, événements, `localStorage`.

**Mission :** Développe un carnet de contacts permettant de :

- Ajouter un contact avec nom, téléphone et email.
- Afficher les contacts sous forme de cartes.
- Rechercher un contact par son nom.
- Modifier ou supprimer un contact.
- Marquer un contact comme favori et filtrer les favoris.
- Conserver les données dans `localStorage`.

**Résultat attendu :** une petite application Web complète et fonctionnelle.

## Organisation pédagogique

| Palier | Challenges | Durée estimée | Compétence principale |
|---|---|---:|---|
| 1 — Logique JavaScript | 01 à 04 | 1 h 45 | Manipuler les données et structurer la logique |
| 2 — DOM et interactivité | 05 à 08 | 2 h 10 | Rendre une page interactive |
| 3 — Applications CRUD | 09 à 10 | 2 h 20 | Construire une application avec persistance |
| **Total** | **10 challenges** | **6 h 15** | **Consolidation du Sprint 2** |

> **Conseil pédagogique :** Pour les apprenants en grande difficulté, fournir un starter HTML/CSS pour les challenges 05 à 10 afin de concentrer les efforts sur JavaScript.

### Méthode de travail

1. Lire la mission et identifier les données nécessaires.
2. Découper le problème en petites étapes.
3. Chercher dans la documentation et tester des exemples simples.
4. Implémenter progressivement les fonctionnalités.
5. Vérifier le résultat avec plusieurs cas de test.
6. Expliquer oralement sa logique et améliorer son code.

## Critères d'évaluation

| Critère | Pondération |
|---|---:|
| Fonctionnement et respect des consignes | 40 % |
| Compréhension du code et capacité à l'expliquer | 30 % |
| Autonomie et démarche de résolution | 20 % |
| Lisibilité et organisation du code | 10 % |
| **Total** | **100 %** |

**Validation :** Un challenge est considéré comme maîtrisé lorsque l'apprenant peut expliquer sa démarche et réaliser une petite modification sans assistance directe.

## Suivi de progression

- [ ] Challenge 01 — Calculateur de panier
- [ ] Challenge 02 — Analyseur de notes
- [ ] Challenge 03 — Gestion des apprenants
- [ ] Challenge 04 — Catalogue intelligent
- [ ] Challenge 05 — Compteur interactif
- [ ] Challenge 06 — Générateur de cartes
- [ ] Challenge 07 — Liste de courses interactive
- [ ] Challenge 08 — Gestionnaire de thèmes
- [ ] Challenge 09 — Gestionnaire de tâches
- [ ] Challenge 10 — Carnet de contacts

## Livrables

- Un dossier par challenge, contenant le code source nécessaire.
- Un fichier `README.md` court par challenge expliquant le fonctionnement et les difficultés rencontrées.
- Une démonstration fonctionnelle pour les challenges utilisant le DOM.

**Objectif final :** être capable de réaliser le carnet de contacts avec une autonomie croissante, en réutilisant les acquis des neuf premiers challenges.
