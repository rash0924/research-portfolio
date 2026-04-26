import React, { useState } from 'react';
import { documentCategories } from '../data/documents';
import { Download, FileText, FileType, ChevronRight, FolderOpen, Folder, Menu, X, FileSpreadsheet } from 'lucide-react';
import './Documents.css';

const Documents = () => {
  const [activeCategory, setActiveCategory] = useState(documentCategories[0]);
  const [expandedCategories, setExpandedCategories] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const getFileIcon = (type) => {
    switch (type) {
      case 'PPTX': return <FileType size={20} />;
      case 'XLSX': return <FileSpreadsheet size={20} />;
      case 'TXT': return <FileText size={20} />;
      default: return <FileText size={20} />;
    }
  };

  const toggleExpand = (catId) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(catId)) {
      newExpanded.delete(catId);
    } else {
      newExpanded.add(catId);
    }
    setExpandedCategories(newExpanded);
  };

  const isSubCategoryActive = (cat) => {
    if (!cat.subCategories) return activeCategory.id === cat.id;
    return cat.subCategories.some(sub => sub.id === activeCategory.id);
  };

  return (
    <div className="documents-page animate-fade-in">

      {/* Page Title */}
      <div className="documents-header">
        <div>
          <h1 className="gradient-text">Project Documents</h1>
          <p className="page-subtitle">Browse and download all project deliverables, reports, and presentations.</p>
        </div>
        <button
          className="sidebar-toggle glass-panel"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          title={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="documents-layout">

        {/* Sliding Sidebar */}
        <aside className={`documents-sidebar glass-panel ${sidebarOpen ? 'open' : 'closed'}`}>
          <div className="sidebar-label">FOLDERS</div>
          <nav className="sidebar-nav">
            {documentCategories.map((cat) => (
              <div key={cat.id} className="nav-item-group">
                <button
                  className={`sidebar-tab ${isSubCategoryActive(cat) ? 'active' : ''}`}
                  style={isSubCategoryActive(cat) ? { borderLeftColor: cat.color, background: `${cat.color}15` } : {}}
                  onClick={() => {
                    if (cat.subCategories) {
                      toggleExpand(cat.id);
                      // By default, select the first sub-category if not already in one
                      if (!isSubCategoryActive(cat)) {
                        setActiveCategory({ ...cat.subCategories[0], parentColor: cat.color, parentLabel: cat.label });
                      }
                    } else {
                      setActiveCategory(cat);
                    }
                  }}
                >
                  <span className="tab-icon">{cat.icon}</span>
                  <span className="tab-label">{cat.label}</span>
                  {cat.subCategories && (
                    <ChevronRight size={16} className={`tab-chevron ${expandedCategories.has(cat.id) ? 'rotate-90' : ''}`} style={{ color: cat.color }} />
                  )}
                  {!cat.subCategories && activeCategory.id === cat.id && (
                    <ChevronRight size={16} className="tab-chevron" style={{ color: cat.color }} />
                  )}
                </button>

                {cat.subCategories && expandedCategories.has(cat.id) && (
                  <div className="sub-nav">
                    {cat.subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        className={`sidebar-tab sub-tab ${activeCategory.id === sub.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory({ ...sub, parentColor: cat.color, parentLabel: cat.label })}
                      >
                        <span className="tab-label">{sub.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </aside>

        {/* File Panel */}
        <main className="documents-panel">
          <div className="panel-header" style={{ borderLeftColor: activeCategory.parentColor || activeCategory.color }}>
            <div className="panel-title-row">
              <span className="panel-folder-icon" style={{ background: `${activeCategory.parentColor || activeCategory.color}20`, color: activeCategory.parentColor || activeCategory.color }}>
                <FolderOpen size={24} />
              </span>
              <div>
                {activeCategory.parentLabel && (
                  <span className="parent-label">{activeCategory.parentLabel} /</span>
                )}
                <h2 className="panel-title">{activeCategory.label}</h2>
                <p className="panel-count">{activeCategory.files?.length || 0} file{(activeCategory.files?.length !== 1) ? 's' : ''} available</p>
              </div>
            </div>
          </div>

          <div className="files-grid">
            {activeCategory.files?.map((file, idx) => (
              <div
                key={idx}
                className="file-card glass-panel"
                style={{ '--card-color': activeCategory.parentColor || activeCategory.color }}
              >
                <div className="file-icon-wrap" style={{ background: `${activeCategory.parentColor || activeCategory.color}18`, color: activeCategory.parentColor || activeCategory.color }}>
                  {getFileIcon(file.type)}
                </div>
                <div className="file-info">
                  <p className="file-name">{file.name}</p>
                  <span className="file-type-badge" style={{ background: `${activeCategory.parentColor || activeCategory.color}20`, color: activeCategory.parentColor || activeCategory.color }}>
                    {file.type}
                  </span>
                </div>
                <a
                  href={file.link}
                  download
                  className="file-download-btn"
                  style={{ background: activeCategory.parentColor || activeCategory.color }}
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}

            {/* Empty state */}
            {(!activeCategory.files || activeCategory.files.length === 0) && (
              <div className="empty-state glass-panel">
                <Folder size={48} style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }} />
                <p>No files uploaded yet.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Documents;
