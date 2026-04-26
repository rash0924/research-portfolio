import React, { useState } from 'react';
import { documentCategories } from '../data/documents';
import { Download, FileText, FileType, ChevronRight, FolderOpen, Folder, Menu, X } from 'lucide-react';
import './Documents.css';

const Documents = () => {
  const [activeCategory, setActiveCategory] = useState(documentCategories[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const getFileIcon = (type) => {
    switch (type) {
      case 'PPTX': return <FileType size={20} />;
      default: return <FileText size={20} />;
    }
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
              <button
                key={cat.id}
                className={`sidebar-tab ${activeCategory.id === cat.id ? 'active' : ''}`}
                style={activeCategory.id === cat.id ? { borderLeftColor: cat.color, background: `${cat.color}15` } : {}}
                onClick={() => setActiveCategory(cat)}
              >
                <span className="tab-icon">{cat.icon}</span>
                <span className="tab-label">{cat.label}</span>
                {activeCategory.id === cat.id && (
                  <ChevronRight size={16} className="tab-chevron" style={{ color: cat.color }} />
                )}
              </button>
            ))}
          </nav>
        </aside>

        {/* File Panel */}
        <main className="documents-panel">
          <div className="panel-header" style={{ borderLeftColor: activeCategory.color }}>
            <div className="panel-title-row">
              <span className="panel-folder-icon" style={{ background: `${activeCategory.color}20`, color: activeCategory.color }}>
                <FolderOpen size={24} />
              </span>
              <div>
                <h2 className="panel-title">{activeCategory.label}</h2>
                <p className="panel-count">{activeCategory.files.length} file{activeCategory.files.length !== 1 ? 's' : ''} available</p>
              </div>
            </div>
          </div>

          <div className="files-grid">
            {activeCategory.files.map((file, idx) => (
              <div
                key={idx}
                className="file-card glass-panel"
                style={{ '--card-color': activeCategory.color }}
              >
                <div className="file-icon-wrap" style={{ background: `${activeCategory.color}18`, color: activeCategory.color }}>
                  {getFileIcon(file.type)}
                </div>
                <div className="file-info">
                  <p className="file-name">{file.name}</p>
                  <span className="file-type-badge" style={{ background: `${activeCategory.color}20`, color: activeCategory.color }}>
                    {file.type}
                  </span>
                </div>
                <a
                  href={file.link}
                  download
                  className="file-download-btn"
                  style={{ background: activeCategory.color }}
                >
                  <Download size={16} />
                  Download
                </a>
              </div>
            ))}

            {/* Empty state */}
            {activeCategory.files.length === 0 && (
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
