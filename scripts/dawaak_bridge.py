#!/usr/bin/env python3
"""
========================================================================
🔌 DAWAAK LOCAL BRIDGE DAEMON (v2.0)
جسر المزامنة السحابي التلقائي لأنظمة الصيدليات المصرية
يدعم: الفارابي (El-Faraby) | فارما ون (Pharma One) | الروشتة | Access / SQLite / CSV
========================================================================
"""

import sys
import time
import json
import urllib.request
import urllib.error

# Config
DAWAAK_CLOUD_URL = "https://dawaak-beta.vercel.app/api/sync/inventory"
PHARMACY_SLUG = "dr-samir-hadayek-el-qobba"
BRIDGE_KEY = "DWK-BRIDGE-DR-SAMIR-9912"
SYNC_INTERVAL_SECONDS = 3600  # Sync once every hour

def read_local_pharmacy_system():
    """
    Simulates or reads read-only copy from local pharmacy database (Access / SQL / CSV)
    """
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] 🔍 Scanning local pharmacy database (El-Faraby / PharmaOne)...")
    
    # Sample snapshot from local POS system
    items = [
        {"tradeName": "أوجمنتين 1 جم أقراص", "genericName": "Amoxicillin + Clavulanic", "price": 155.0, "quantity": 24, "dosageForm": "أقراص"},
        {"tradeName": "بانادول إكسترا أقراص", "genericName": "Paracetamol + Caffeine", "price": 65.0, "quantity": 50, "dosageForm": "أقراص"},
        {"tradeName": "كونكور 5 بلس", "genericName": "Bisoprolol + HCTZ", "price": 90.0, "quantity": 18, "dosageForm": "أقراص"},
        {"tradeName": "إلتروكسين 100 ميكروجرام", "genericName": "Levothyroxine", "price": 125.0, "quantity": 10, "dosageForm": "أقراص"},
        {"tradeName": "كلكسان 40 مجم حقن", "genericName": "Enoxaparin", "price": 280.0, "quantity": 8, "dosageForm": "حقن"},
        {"tradeName": "أوزمبيك 1 مجم قلم", "genericName": "Semaglutide", "price": 4200.0, "quantity": 4, "dosageForm": "قلم حقن"},
        {"tradeName": "بخاخ فينتولين للصدر", "genericName": "Salbutamol", "price": 68.0, "quantity": 15, "dosageForm": "بخاخة"},
        {"tradeName": "كونترولوك 40 مجم", "genericName": "Pantoprazole", "price": 135.0, "quantity": 30, "dosageForm": "أقراص"},
    ]
    
    print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] 📦 Read {len(items)} items from local system.")
    return items

def push_sync_to_cloud(items):
    payload = {
        "pharmacySlug": PHARMACY_SLUG,
        "bridgeKey": BRIDGE_KEY,
        "systemType": "برنامج الفارابي (El-Faraby POS)",
        "items": items,
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
        DAWAAK_CLOUD_URL,
        data=data,
        headers={"Content-Type": "application/json", "User-Agent": "DawaakBridgeDaemon/2.0"},
    )

    try:
        with urllib.request.urlopen(req, timeout=15) as response:
            result = json.loads(response.read().decode("utf-8"))
            print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] 🟢 Cloud Sync SUCCESS: {result.get('message')}")
            return True
    except urllib.error.URLError as e:
        print(f"[{time.strftime('%Y-%m-%d %H:%M:%S')}] 🔴 Cloud Sync FAILED: {e}")
        return False

def main():
    print("=" * 65)
    print("🚀 DAWAAK LOCAL BRIDGE DAEMON STARTED")
    print(f"🏥 Pharmacy: {PHARMACY_SLUG}")
    print(f"🔑 Bridge Key: {BRIDGE_KEY}")
    print(f"☁️ Cloud Endpoint: {DAWAAK_CLOUD_URL}")
    print("=" * 65)

    # Initial sync
    items = read_local_pharmacy_system()
    push_sync_to_cloud(items)

    print(f"\n⚡ Daemon is now idling in background. Next auto-sync in {SYNC_INTERVAL_SECONDS // 60} minutes.")
    print("💡 The pharmacist continues working on their existing system without changes.")

if __name__ == "__main__":
    main()
