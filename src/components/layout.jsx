import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Layout, Eye, CheckCircle2, X, Zap, Palette, Minimize2 } from 'lucide-react';
import { Button, Badge, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// ================== Styles ==================
const useStyles = makeStyles({
  galleryContainer: {
    minHeight: '100vh !important',
    background: 'linear-gradient(135deg, #f8fafc, #ffffff, #eef2ff) !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
  },
  heroSection: {
    position: 'relative !important',
    overflow: 'hidden !important',
    width: '100% !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    paddingTop: '64px !important',
    paddingBottom: '48px !important',
  },
  heroIconsWrapper: {
    display: 'flex !important',
    justifyContent: 'center !important',
    gap: '12px !important',
    marginBottom: '24px !important',
  },
  heroIcon: {
    width: '56px !important',
    height: '56px !important',
    borderRadius: '16px !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    background: 'linear-gradient(135deg, #4f46e5, #8b5cf6) !important',
    boxShadow: '0 10px 15px -3px rgba(139,92,246,0.2) !important',
  },
  heroTitle: {
    fontSize: '48px !important',
    fontWeight: '700 !important',
    color: '#111827 !important',
    textAlign: 'center !important',
    marginBottom: '16px !important',
  },
  heroTitleGradient: {
    background: 'linear-gradient(to right, #4f46e5, #8b5cf6) !important',
    WebkitBackgroundClip: 'text !important',
    WebkitTextFillColor: 'transparent !important',
    display: 'block !important',
    marginTop: '8px !important',
  },
  heroSubtitle: {
    fontSize: '20px !important',
    color: '#4b5563 !important',
    maxWidth: '600px !important',
    textAlign: 'center !important',
    marginBottom: '24px !important',
  },
  filterContainer: {
    display: 'flex !important',
    justifyContent: 'center !important',
    marginBottom: '48px !important',
    flexWrap: 'wrap !important',
    gap: "8px !important",
  },
  filterButton: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignItems: 'center !important',
    gap: '4px !important',
    padding: '12px 16px !important',
    borderRadius: '16px !important',
    cursor: 'pointer !important',
    background: '#ffffffcc !important',
    backdropFilter: 'blur(12px) !important',
    transition: 'all 0.3s ease !important',
    fontSize: '12px !important',
    color: '#374151 !important',
    '&.active': {
      background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
      color: '#ffffff',
    },
  },
  templatesContainer: {
    display: 'flex !important',
    flexWrap: 'wrap !important',
    gap: '24px !important',
    justifyContent: 'center !important',
    paddingBottom: '80px !important',
    width: '100% !important',
  },
  card: {
    width: '280px !important',
    borderRadius: '24px !important',
    overflow: 'hidden !important',
    backgroundColor: '#ffffffcc !important',
    backdropFilter: 'blur(12px) !important',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1) !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    position: 'relative !important',
    transition: 'all 0.3s ease !important',
    '&:hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
    },
  },
  cardImageWrapper: {
    position: 'relative !important',
    width: '100% !important',
    paddingTop: '133% !important', // 3/4 aspect ratio
    overflow: 'hidden !important',
    background: 'linear-gradient(135deg, #f9fafb, #f3f4f6) !important',
  },
  cardImage: {
    position: 'absolute !important',
    top: '0 !important',
    left: '0 !important',
    width: '100% !important',
    height: '100% !important',
    objectFit: 'cover !important',
  },
  overlay: {
    position: 'absolute !important',
    inset: '0 !important',
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent) !important',
    opacity: '0 !important',
    display: 'flex !important',
    alignItems: 'flex-end !important',
    justifyContent: 'center !important',
    paddingBottom: '24px !important',
    transition: 'opacity 0.3s !important',
  },
  cardContent: {
    padding: '24px !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    gap: '12px !important',
  },
  cardTitle: {
    fontWeight: '600!important',
    fontSize: '16px !important',
    color: '#111827 !important',
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
  },
  cardStyleBadge: {
    fontSize: '10px !important',
    color: '#4f46e5 !important',
    backgroundColor: '#eef2ff !important',
    borderRadius: '4 !important',
    padding: '2px 6px !important',
  },
  cardDesc: {
    fontSize: '12px !important',
    color: '#4b5563 !important',
  },
  cardFeatures: {
    display: 'flex !important',
    flexWrap: 'wrap !important',
    gap: '4px !important',
  },
  featureTag: {
    fontSize: ' 10px !important',
    padding: '2px 6px !important',
    borderRadius: '4px !important',
    backgroundColor: '#f3f4f6 !important',
    color: '#4b5563 !important',
  },
  layoutDialogContent: {
    display: 'flex !important',
    flexDirection: 'column !important',
    gap: '24px !important',
    background: 'linear-gradient(135deg, #1e293b, #111827, #1e293b) !important',
    color: '#fff !important',
    maxHeight: '90vh !important',
    padding: '24px !important',
  },
  layoutGrid: {
    display: 'flex !important',
    flexWrap: 'wrap !important',
    gap: '16px !important',
    justifyContent: 'center !important',
  },
  layoutOption: {
    width: '200px !important',
    borderRadius: '16px !important',
    padding: '16px !important',
    backgroundColor: 'rgba(255,255,255,0.05) !important',
    border: '1px solid rgba(255,255,255,0.2) !important',
    display: 'flex !important',
    flexDirection: 'column !important',
    gap: '12px !important',
    cursor: 'pointer !important',
    position: 'relative !important',
    transition: 'all 0.3s',
    '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' },
  },
  selectedLayoutOption: {
    background: 'linear-gradient(135deg, #a78bfa33, #8b5cf633) !important',
    border: '2px solid #a78bfa !important',
    boxShadow: '0 10px 20px rgba(167,139,250,0.3) !important',
  },
  layoutPreview: {
    width: '100% !important',
    height: '120px !important',
    borderRadius: '12px !important',
    background: '#374151 !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
  },
});

// ================== TemplateCard ==================
const TemplateCard = ({ template, onPreview, onSelect, isSelected }) => {
  const classes = useStyles();
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className={classes.card}>
        <div className={classes.cardImageWrapper}>
          {template.preview_image ? (
            <img src={template.preview_image} alt={template.name} className={classes.cardImage} />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={48} color="#4f46e5" />
            </div>
          )}
          <div className={classes.overlay}>
            <Button onClick={() => onPreview(template)} variant="contained" style={{ backgroundColor: '#ffffffee', color: '#111827' }}>
              <Eye size={16} style={{ marginRight: 4 }} /> Preview
            </Button>
          </div>
        </div>
        <div className={classes.cardContent}>
          <div className={classes.cardTitle}>
            {template.name}
            <span className={classes.cardStyleBadge}>{template.style}</span>
          </div>
          <p className={classes.cardDesc}>{template.description}</p>
          {template.features && (
            <div className={classes.cardFeatures}>
              {template.features.slice(0, 3).map((f, i) => (
                <span key={i} className={classes.featureTag}>{f}</span>
              ))}
            </div>
          )}
          <Button
            onClick={() => onSelect(template)}
            style={{
              background: isSelected ? '#16a34a' : 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
              color: '#fff',
              marginTop: 8,
            }}
          >
            {isSelected ? <><CheckCircle2 size={16} style={{ marginRight: 4 }} /> Selected</> : 'Use This Template'}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

// ================== TemplateFilters ==================
const filterOptions = [
  { value: 'all', label: 'All', icon: Sparkles },
  { value: 'modern', label: 'Modern', icon: Zap },
  { value: 'classic', label: 'Classic', icon: Palette },
  { value: 'creative', label: 'Creative', icon: Sparkles },
  { value: 'minimal', label: 'Minimal', icon: Minimize2 },
];

const TemplateFilters = ({ activeFilter, onFilterChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.filterContainer}>
      {filterOptions.map((f) => {
        const Icon = f.icon;
        return (
          <div
            key={f.value}
            className={`${classes.filterButton} ${activeFilter === f.value ? 'active' : ''}`}
            onClick={() => onFilterChange(f.value)}
          >
            <Icon size={16} />
            <span>{f.label}</span>
          </div>
        );
      })}
    </div>
  );
};

// ================== LayoutOption ==================
const LayoutOption = ({ layout, isSelected, onSelect }) => {
  const classes = useStyles();
  return (
    <motion.div
      className={`${classes.layoutOption} ${isSelected ? classes.selectedLayoutOption : ''}`}
      onClick={() => onSelect(layout)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {isSelected && <CheckCircle2 size={20} style={{ position: 'absolute', top: 8, right: 8, color: '#a78bfa' }} />}
      <div className={classes.layoutPreview}>{layout.name}</div>
      <div style={{ textAlign: 'center', fontWeight: 600 }}>{layout.name}</div>
    </motion.div>
  );
};

// ================== Main Component ==================
export default function TemplateGallery() {
  const classes = useStyles();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewTemplate, setPreviewTemplate] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);

  // Dummy template data
  const templates = [
    { id: 1, name: 'Modern Resume', style: 'modern', description: 'A modern resume template', features: ['Fast', 'Clean', 'Responsive'], preview_image: '' },
    { id: 2, name: 'Classic Resume', style: 'classic', description: 'A classic resume template', features: ['Elegant', 'Professional'], preview_image: '' },
  ];

  const layouts = [
    { id: 1, name: 'Single Column' },
    { id: 2, name: 'Two Column' },
    { id: 3, name: 'Creative' },
    { id: 4, name: 'Modern' },
  ];

  const filteredTemplates = activeFilter === 'all' ? templates : templates.filter(t => t.style === activeFilter);

  return (
    <div className={classes.galleryContainer}>
      {/* Hero */}
      <div className={classes.heroSection}>
        <div className={classes.heroIconsWrapper}>
          <div className={classes.heroIcon}>
            <FileText size={28} color="#fff" />
          </div>
        </div>
        <h1 className={classes.heroTitle}>
          Choose Your Perfect
          <span className={classes.heroTitleGradient}>Resume Template</span>
        </h1>
        <p className={classes.heroSubtitle}>
          Stand out with professionally designed templates crafted to showcase your unique story
        </p>
        <Button
          variant="contained"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #9333ea) !important', color: '#fff!important', padding: '12px 24px !important' }}
          onClick={() => setIsLayoutOpen(true)}
        >
          <Layout size={20} style={{ marginRight: 4 }} /> Choose Layout First
        </Button>
      </div>

      {/* Filters */}
      <TemplateFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {/* Templates */}
      <div className={classes.templatesContainer}>
        {filteredTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
            onPreview={(t) => { setPreviewTemplate(t); setIsPreviewOpen(true); }}
            onSelect={setSelectedTemplate}
            isSelected={selectedTemplate?.id === template.id}
          />
        ))}
      </div>

      {/* Template Preview Modal */}
      {previewTemplate && (
        <Dialog open={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>{previewTemplate.name} Preview</DialogTitle>
          <DialogContent>
            <p>{previewTemplate.description}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {previewTemplate.features.map((f, i) => (
                <Badge key={i} style={{ backgroundColor: '#f3f4f6 !important', color: '#4b5563 !important', padding: '4px 8px !important' }}>{f}</Badge>
              ))}
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsPreviewOpen(false)} style={{ backgroundColor: '#f3f4f6 !important', color: '#111827 !important' }}><X size={16} /> Close</Button>
            <Button onClick={() => { setSelectedTemplate(previewTemplate); setIsPreviewOpen(false); }} style={{ backgroundColor: '#4f46e5 !important', color: '#fff !important' }}><CheckCircle2 size={16} /> Select</Button>
          </DialogActions>
        </Dialog>
      )}

      {/* Layout Selector Modal */}
      <Dialog open={isLayoutOpen} onClose={() => setIsLayoutOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle style={{ color: '#fff' }}>Select Layout</DialogTitle>
        <DialogContent className={classes.layoutDialogContent}>
          <div className={classes.layoutGrid}>
            {layouts.map(layout => (
              <LayoutOption
                key={layout.id}
                layout={layout}
                isSelected={selectedLayout?.id === layout.id}
                onSelect={setSelectedLayout}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsLayoutOpen(false)} style={{ backgroundColor: '#f3f4f6 !important', color: '#111827 !important' }}><X size={16} /> Close</Button>
          <Button onClick={() => setIsLayoutOpen(false)} style={{ backgroundColor: '#4f46e5 !important', color: '#fff !important' }}><CheckCircle2 size={16} /> Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
